
const express = require('express');
const app = express();
const path =require("path");
const hbs = require("hbs");

//app.get('/contact', function(req, res){
  //  res.send("Hello world!!")
//})

//we are using hbs as our templets
const partials = path.join(__dirname,'/views/partials');
hbs.registerPartials(partials);

const publicDirectory = path.join(__dirname,"Static");//root//root/static
app.use(express.static(publicDirectory));

app.listen(100);
app.set('view enginge','hbs'); 

app.get('/contact',function(req,res){
res.render('contact.hbs')


});
app.get('/',function(req,res){
  res.render('index.hbs')
});
app.get('/elements',function(req,res){
  res.render('elements.hbs')
});
//app.get('/about', function(req,res){
  //  res.send("About us Page ");
//})

//app.get('/',function(req, res){
  //  res.send("Home Page")
//})

//app.get('/student/:username', function(req,res){
  //  res.send(req.params.username)
//}) 

//app.get('/user/:batch/:student/:id', function(req,res){
  //  const batch = req.params.batch
    //const student = req.params.student
    //const id = req.params.id
    //res.send("Hello "+ student+ " You are from "+batch+ " Your ID is "+id)
//})



app.get('/gallery',function(req, res){
    res.sendFile(__dirname + '/gallery.html')
})
app.get('/aboutus',function(req, res){
    res.sendFile(__dirname + '/aboutus.html')
})

