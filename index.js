const express   =   require('express')
//const path      =   require('path')
const expressEdge = require('express-edge')
const edgeJS = require('edge.js')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const connectFlash = require('connect-flash');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');//need for store session //otherwise when server restart session will deleted
// middleware
const auth =  require('./middleware/auth')//use it ass controller or direct use inside the router
const postStoreM =  require('./middleware/createPostMiddleware')
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')
const redirectIfNotAuthenticated = require('./middleware/redirectIfNotAuthenticated')
// controller include section
const createPostcontroller = require('./controllers/createPost')
const indexPageController = require('./controllers/indexPage')
const aboutPageController = require('./controllers/aboutpage')
const postStoreController = require('./controllers/postStore')
const singlePostController = require('./controllers/singlePost')
const postUpdatePageController = require('./controllers/postUpdatePage')
const postUpdateController = require('./controllers/postUpdate')
// user controller
const createProfileController = require('./controllers/user/createProfileController')
const userPostController = require('./controllers/user/userPostController')
const userLoginPageController = require('./controllers/user/userLoginPageController')
const userLoginController = require('./controllers/user/userLoginController')
const userLoginOutController = require('./controllers/user/userLogoutController')
// Using Node.js `require()`
const mongoose = require('mongoose');

const app       =   new express()

const mongoStore = connectMongo(expressSession)

mongoose.connect('mongodb://127.0.0.1:27017/nodeapp', {
    useNewUrlParser: true,
    useCreateIndex: true
})

app.use(expressSession({
    secret: 'cookie_secret',
  //  name: 'cookie_name',
  //  store: 'sessionStore', // connect-mongo session store
  ///  proxy: true,
    resave: true,
    saveUninitialized: true,
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))
// mongoose connection 
app.use(connectFlash())
app.use(expressEdge)
app.set('views', `${__dirname}/views`);

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(fileUpload())

app.use('*', (req,res,next)=>{
    edgeJS.global('auth',req.session.userId)// set global variable to use all of the request & named auth and we store session userid

    next()
})


const customMiddleware = (req,res,next)=>{
    console.log('Custom middleware have been called')
    next()//permissin for the next functionality
}

// const validateCreatePostMiddleware = (req,res,next)=>{

//     if(!req.files.afile || !req.body.title || !req.body.content){
//         return res.redirect('/posts/new')
//     }
//     next()
// }

//app.use('/posts/store',validateCreatePostMiddleware)
// app.use('/posts/new',auth)// it's work but we use it direct to the route


app.use(customMiddleware)

//route register here
app.get('/',indexPageController)
app.get('/post/:id',singlePostController)
app.get('/about',aboutPageController)
app.get('/posts/new',auth,createPostcontroller)
app.post('/posts/store',auth,postStoreM,postStoreController)
app.get('/update/:id',auth,postUpdatePageController)
app.post('/post/update/:id',auth,postUpdateController)

//user
app.get('/users/register',redirectIfAuthenticated,createProfileController);
app.post('/users/store',userPostController);
app.get('/users/login',redirectIfAuthenticated,userLoginPageController);
app.post('/users/login-check',userLoginController);
//app.get('/auth/logout',redirectIfAuthenticated,userLoginOutController);
app.get('/auth/logout',redirectIfNotAuthenticated,userLoginOutController);

// route end
// port set 
 app.listen(4000,   ()  =>{

    console.log('app start on port 4000')
    
 })