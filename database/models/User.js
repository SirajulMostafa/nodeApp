const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserPostShcema = new Schema({
    username:{
        type:String,
        required:[ true, 'please provide you username'],
        unique:true

    },
    email: {
        type:String,
        required:[ true, 'please provide you email'],
        unique:true

    },
    password:{
        type:String,
        required:[ true, 'please provide you password'],

    },
    repassword:String,
    createdAt:{
        type:Date,
        default: new Date()
    }

})

UserPostShcema.pre('save',function(next){
    if(this.password) {                                                                                                                                                        
        const salt = bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = bcrypt.hashSync(this.password, salt)                                                                                                                
} 
next()

})

// UserPostShcema.pre('save', async function() {
//     await doStuff(
//         console.log("do stuff")
//     );
//     await doMoreStuff();
//   });
 

module.exports  =  mongoose.model('User',UserPostShcema)