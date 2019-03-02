const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserPostShcema = new Schema({
    username: String,
    email: String,
    password: String,
    repassword: String,
    img:String,
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