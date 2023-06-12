const express = require('express');
const mysql = require('mysql2');
const app = express();
const flash = require("connect-flash")
const session = require("express-session")
const DB = require("./database")

app.use(express.urlencoded({ extended: true }));


//create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'test',
//   });
//   connection.connect((err) =>{
//     if (err){
//         console.log('Error connection to MySQL database =',err)
//         return;
//     }
//     console.log('MySQL successfully connected!')
// })
  

//route
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(session({
    secret: "secret"
}))
app.use(flash())

app.use('/Design/', express.static('./Design'));





const indexController = require("./controllers/indexController")
const formController = require("./controllers/formController")

app.get('/', indexController)
app.post('/user/add', formController)












 app.get('/contact', (req ,res) =>{
     res.render("contact");
 });
 app.get('/support', (req ,res) =>{
     res.render("support");
 });
 
const server = app.listen(process.env.PORT || 3000,() =>{
    console.log("Server is running on port 3000!!");
});