
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const app = express();

const PORT = 3000;

const saltRounds = 10;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://0.0.0.0:27017/userDB", {useNewUrlParser: true});


const userSchema = new mongoose.Schema({
  email:String,
  password:String,

});

const User = new mongoose.model("User",userSchema);

app.get('/', (req, res) => {
  res.render("login");
});

app.get('/register', (req, res) => {  

  res.render("register");

});

app.get("/login",(req,res) =>{
  res.render("login");
})


app.post("/register",(req,res) =>{
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            const userEmail = req.body.username;
             const userPassword =hash;
             const user = new User({
             email:userEmail,
             password:userPassword
         })
         user.save()
         res.render("home")
    
        })
});


app.post("/login",(req,res) =>{
      User.findOne({email:req.body.username})
     .then( (foundResult)=>{
        if(foundResult){

          
         bcrypt.compare(req.body.password,foundResult.password , function(err, result) {
           // result == true
             if(result){
                 res.render("home");
        
                
              }
            
            });
          }
          else{
            const errorLogin = "Invalid username or password";
            res.render("login", { error: errorLogin });
          }
     })
     .catch(err =>{
        console.log(err);
     })

})




app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));