const express = require('express')
const dbConnect = require('./config/dbConnect')
const methodOverride = require('method-override')
const app = express();

app.set("view engine", "ejs")
app.set("views", "C:/Users/user/OneDrive/바탕 화면/devicenet(강효원)/devicenet_practice/views") 

app.use(express.static('./public'))
app.use(methodOverride("_method"))
 
dbConnect()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./routes/loginRoutes'))
app.use('/contacts', require('./routes/contactRoutes'))

app.listen(3000, () => {
    console.log('Server is Running')
})