const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const BlogPostSchema = new Schema({
    // author: ObjectId,
    title: String,
    description: String,
    content: String,
    createAt:{
        type:Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post',BlogPostSchema)

module.exports  =   Post