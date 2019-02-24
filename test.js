const mongoose = require('mongoose')
const Post = require('./database/models/Post')

mongoose.connect('mongodb://127.0.0.1:27017/nodeapp', {
    useNewUrlParser: true
});

// mongoose.connect('mongoose://localhost:27017/nodeapp-test')



// Post.find({},(e,post)=>{
// console.log(e, post)
// })

// Post.findById("5c70e27201a3b679321dce66", (e, post) => {
//     console.log(e, post)
//     console.log("find by id post")
// })

// Post.findByIdAndUpdate("5c70e27201a3b679321dce66",{title: "my second post"},
// (e, post) => {
//     console.log(e, post)
//     console.log("updated post")
// })




Post.create({
    username:'Mostafa',
    title:'Blog title',
    description:'description fist Blog post',
    content:'My fist Blog post 3',
    date: Date.now(),

},  (e,post)  =>{

    console.log(e,post)
 
}) 

