const path = require('path')
const User = require('../../database/models/User')

module.exports = 
(req, res) => {
    let image = req.files.afile
       //console.log( req.image)
      
        image.mv(path.resolve(__dirname,'..','public/posts/profile',image.name),(e)=>{
            User.create({
                ...req.body,
                img:`/posts/profile/${image.name}`,
            },(error,user)=>{
            res.redirect('/')
            })
        
        })
    
    }