
module.exports =  (req, res) =>{
    if(req.session.userId){
     return   res.render('create')
    }
     
    res.redirect('/users/login')
    
    }// here export the create.edge page
