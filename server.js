const express = require("express");
const hbs = require("hbs");

var app = express();
app.use(express.static(__dirname +'/public'));
app.set("view engine", 'hbs');

app.use((req,res,next)=>{
  const log = new Date().toString();
  console.log(log)
  next();
})

// app.use((req,res,next)=>
// {
//   res.render('eror.hbs');
// })


hbs.registerPartials(__dirname + '/partials');

hbs.registerHelper('ali',()=>{
  return 'morza';
})

hbs.registerHelper('yes',(test)=>
{
  return test + 'kir';
})

app.get("/", (req, res) => {
  res.send("<h1>hi mther</h1>");
});

app.get('/about' , (req , res)=>{

   res.render('about.hbs',{
     name : "younes",
     sizeofdick : 27,
     array : [1,2,3,4]
   });

})

app.listen(2700);
