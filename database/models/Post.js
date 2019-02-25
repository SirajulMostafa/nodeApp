const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const BlogPostSchema = new Schema({
    // author: ObjectId,
    username: String,
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