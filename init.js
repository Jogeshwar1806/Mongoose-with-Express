const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("mongoose is working.");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

const Chat = require("./models/chat.js");

defaultchats = [
    {
        from:"Arshad",
        to:"Vishal",
        msg:"Aur, Kya Scene ?",
        created_at:new Date()
    },{
        from:"Abhilipsa",
        to:"Jogesh",
        msg:"Haan Bolo..",
        created_at:new Date()
    },{
        from:"Arshad",
        to:"Saba",
        msg:"Mein Thoda sa Handsome hu",
        created_at:new Date()
    },{
        from:"Abhilipsa",
        to:"Jogesh",
        msg:"Hello!!",
        created_at:new Date()
    },{
        from:"Vishal",
        to:"Mohit",
        msg:"Mera bhi naam Mohit hai",
        created_at:new Date()
    },{
        from:"Mommy",
        to:"Abhilipsa",
        msg:"Kya kar rhi ho ?",
        created_at:new Date()
    },{
        from:"Jogesh",
        to:"Arshad",
        msg:"Aur, Kya Scene ?",
        created_at:new Date()
    },{
        from:"Unknown",
        to:"Vishal",
        msg:"Mera Beta, Mera Beta",
        created_at:new Date()
    }
];

Chat.insertMany(defaultchats);