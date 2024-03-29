const {Schema, model} = require("mongoose");
const bcrypt = require("bcrypt");
const { createToken } = require("../services/authentication");

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    profileImg: {
        type: String,
        default: "/images/userDefault.png"
    },
    role:{
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },
    password: {
        type: String,
        required: true
    }
},
    {timestamps: true}
);

userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified("password"))
    return;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    this.password = hashedPassword;
    next();

})

userSchema.statics.checkUser = async function(email, password){
    if(!email || !password)
    throw Error('All fields are required!');

    const user = await this.findOne({email});
    if(!user)
    throw Error('Email not registered.');

    //console.log({...user});
    const passMatch = await bcrypt.compare(password, user.password);
    if(!passMatch)
    throw Error('Incorrect Password');

    const token = createToken(user);

    return token;
}

const User = model('user',userSchema);

module.exports = {
    User
}