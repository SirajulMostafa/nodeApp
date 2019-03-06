const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const BlogPostSchema = new Schema({
    // author: ObjectId,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    title: String,
    description: String,
    content: String,
    img:String,
    createAt:{
        type:Date,
        default: new Date()
    }

})

const Post = mongoose.model('Post',BlogPostSchema)

module.exports  =   Post