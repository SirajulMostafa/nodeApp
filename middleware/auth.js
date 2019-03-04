const User = require('../database/models/User')

module.exports = (req,res,next)=>{

    //fetch data from database
    User.findById(req.session.userId,(error,user)=>{
        if (error || !user) {
           return res.redirect('/') 
        }
        next()
    })

    // varify data
}