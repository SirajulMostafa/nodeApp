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
                if(error){

                // console.log(error,user)
                // console.log(Object.keys(error.errors).map(key=> error.errors[kay].message))
                // mongoose object/[ 'username', 'email', 'password' ]
                // mapping only the user message and message is the user properties of model user
                 //    req.session.registrationErrors =  Object.keys(error.errors).map(key=> error.errors[key].message)
                   const registrationErrors =  Object.keys(error.errors).map(key=> error.errors[key].message)
                
                  // console.log(registrationErrors)
                    req.flash('registrationErrors',registrationErrors)
                    req.flash('data',req.body)// also flash reqest data to the view so username etc keep the previews input data
                 return   res.redirect('/users/register')

                }
                
            res.redirect('/')
            })
        
        })
    
    }