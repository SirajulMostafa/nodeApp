const express   =   require('express')
const path      =   require('path')
const expressEdge = require('express-edge')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const Post = require('./database/models/Post')
// Using Node.js `require()`
const mongoose = require('mongoose');

const app       =   new express()

// mongoose connection 

mongoose.connect('mongodb://127.0.0.1:27017/nodeapp', {
    useNewUrlParser: true
})

// mongoose.connect('mongodb://127.0.0.1:27017/nodeapp-test-db', {
//     useNewUrlParser: true
// });

// default  optional 
// Automatically sets view engine and adds dot notation to app.render
//use the middleware with express register with express
app.use(expressEdge)
app.set('views', `${__dirname}/views`);

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(fileUpload())


//route
app.get('/', async(req,res)  =>{

const posts = await Post.find({})
console.log(posts)

    res.render('index',{posts})//short form of Posts:Posts
})


app.get('/about', (req, res) => {

    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('about')
})
app.get('/post', (req, res) => {

    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('post')
})
app.get('/contact', (req, res) => {

    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('contact')
})
app.get('/posts/new', (req, res) => {

    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('create')
})
app.post('/posts/store', (req, res) => {
    // const {image} = req.files

    // image.mv(path.resolve(__dirname,'publice/posts',image.name),(e)=>{
    //     Post.create(req.body,(error,post)=>{
    //     res.redirect('/')
    //     })
    
    // })

    Post.create(req.body,(e,post)=>{
       
        console.log(e,req.body)
        res.redirect("/")
    })

   // console.log(req.body)
    //res.redirect('/')
})
app.get('/profile', (req, res) => {

    res.render('profile')
})

// route end
// port set 
 app.listen(4000,   ()  =>{

    console.log('app start on port 4000')
    
 })