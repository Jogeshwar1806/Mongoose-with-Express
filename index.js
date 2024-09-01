// initializing express
const express = require("express");
const app = express();
const path = require("path");   
let port = 8080;

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
 

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


app.get("/", (req, res) => {
  res.send("Hello There Server is running");
});

// app.set("views","ejs");
// app.use();

app.listen(port, () => {
  console.log(`Your Port ${port} is working properly.`);
});
