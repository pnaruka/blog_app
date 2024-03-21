const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    body:{
        type: String,
        required: true
    },
    blogId:{
        type: Schema.Types.ObjectId,
        ref: 'blog'
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
},
    {timestamps: true}
);

const Comment = model('comment', commentSchema);