// initializing express
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");  
let port = 8080;

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

// initializing mongoose
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("mongoose is working.");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//requiring chat from chat.js
const Chat = require("./models/chat.js");

//index route
app.get("/chats",async (req,res)=>{
  let chats = await Chat.find({});
  res.render("index.ejs",{chats});
});

//new Chat route
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
})

//post creating route
app.post("/chats",(req,res)=>{
  let {from,to,msg} = req.body;
  created_at = new Date;
  let chat = {from,to,msg,created_at};
  let chat1 = new Chat(chat);
  chat1.save().then(res=>{console.log(res);}).catch(err=>{console.log(err)}); 
  res.redirect("/chats");
})

//edit form route
app.get("/chats/:id",async(req,res)=>{
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{chat});
});

//PUT editing route
app.put("/chats/:id",async(req,res)=>{
  let {id} = req.params;
  let {msg} = req.body;
  Chat.updateOne({_id:id},{msg:msg}).then(res=>{console.log(res);}).catch(err=>{console.log(err);})
  res.redirect("/chats");
})

//destroy route
app.delete("/chats/:id",async (req,res)=>{
  let {id} = req.params;
  await Chat.deleteOne({_id:id}).then(res=>{console.log(res);}).catch(err=>{console.log(err)});
  res.redirect("/chats");
});


app.get("/", (req, res) => {
  res.send("Hello There Server is running");
});

// app.set("views","ejs");
// app.use();

app.listen(port, () => {
  console.log(`Your Port ${port} is working properly.`);
});
