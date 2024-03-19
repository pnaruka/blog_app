const {Schema, model} = require("mongoose");
const bcrypt = require("bcrypt");

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

const User = model('user',userSchema);

module.exports = {
    User
}