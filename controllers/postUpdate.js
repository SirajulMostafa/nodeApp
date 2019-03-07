const Post = require('../database/models/Post')


module.exports = async (req,res)=>{

    // //const post = await Post.findById(req.params.id)
    // const post  = await Post.findByIdAndUpdate(req.params.id)
    // Post.
    // console.log(post)
    console.log(req.params.id);
    Post.findByIdAndUpdate(
        // the id of the item to find
        req.params.id,
      
        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        req.body,
        
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        {new: true},       
        // the callback function
        (err, post) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            //return res.send(post);
            // res.render("update",{
            //     post
            // })
            res.redirect('/update/'+post._id)
        }
    )
    
}