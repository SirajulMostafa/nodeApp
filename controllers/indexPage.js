const Post = require('../database/models/Post')

module.exports =  async(req,res)  =>{
//inside populate we give name of the terget property
   //here we can get object of user
   // const posts = await Post.find().populate('user_id').select('title description content createAt user_id')
   //here we can get the target field from  user givined the second argument value and - _id we can remove _id from list
    const posts = await Post.find().populate('user_id','username -_id').select('')
    console.log(req.session)
    console.log(posts)   
        res.render('index',{posts})//short form of Posts:Posts
    }