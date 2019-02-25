const express   =   require('express')
const path      =   require('path')
const expressEdge = require('express-edge')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const Post = require('./database/models/Post')
// controller include section
const createPostcontroller = require('./controllers/createPost')
const indexPageController = require('./controllers/indexPage')
const aboutPageController = require('./controllers/aboutpage')
const postStoreController = require('./controllers/postStore')
const singlePostController = require('./controllers/singlePost')


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


const customMiddleware = (req,res,next)=>{
    console.log('Custom middleware have been called')
    next()//permissin for the next functionality
}

const validateCreatePostMiddleware = (req,res,next)=>{

    if(!req.files.afile || !req.body.title || !req.body.content){
        return res.redirect('/posts/new')
    }
    next()
}

app.use('/posts/store',validateCreatePostMiddleware)
app.use(customMiddleware)

//route register here
app.get('/',indexPageController)
app.get('/post/:id',singlePostController)


app.get('/about',aboutPageController)
app.get('/post', (req, res) => {

    res.render('post')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/posts/new',createPostcontroller)

app.post('/posts/store',postStoreController)
app.get('/profile', (req, res) => {

    res.render('profile')
})

// route end
// port set 
 app.listen(4000,   ()  =>{

    console.log('app start on port 4000')
    
 })