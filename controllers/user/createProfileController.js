
var parser = require('json-parser');


module.exports =  (req, res) =>{
    //  console.log(req.session.registrationErrors)
  // console.log(req.flash('data')[0]);//[ { username: '', email: '', password: '', re_password: '' } ]
    //console.log(parser.parse(req.flash('data')[0]));

    //let data=req.flash('data')[0] 
 
      res.render('user/create',{
         // errors:req.session.registrationErrors
          errors:req.flash('registrationErrors'), //call the target flash data['reErros'] 
          data:req.flash('data')[0]
      })
     
     }
 