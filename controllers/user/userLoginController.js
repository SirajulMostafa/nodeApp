const bcrypt = require('bcryptjs')
const User = require('../../database/models/User')
module.exports = 
(req, res) => {
const {email,password} = req.body


    // try to find the user name
    User.findOne({email}, (e,user)=>{
        if(user){
        //compare user name and password
     bcrypt.compare(password,user.password,(error,same)=>{
         if(same){

            //store user session
                req.session.userId = user._id
             res.redirect('/')
         }
         else{
             res.redirect('/users/login')
         }
     })

        }
        else{
            res.redirect('/users/login')
        }
    })
 
    //if username and password correct then login user
    //redirect user back.
    //else redirect
    
    //res.redirect('/')
    }