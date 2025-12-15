const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then((res) => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
      from: "neha",
      to: "priya",
      message: "send me your exam sheets",
      created_at: new Date()
    },
    {
      from: "eve",
      to: "bob",
      message: "Hii!! How are you?",
      created_at: new Date()
    },
    {
      from: "tony",
      to: "bruce",
      message: "send me your notes.",
      created_at: new Date()
    },
    {
      from: "sam",
      to: "neha",
      message: "what are you doing?",
      created_at: new Date()
    },
    {
      from: "saika",
      to: "sarika",
      message: "Today your live class!",
      created_at: new Date()
    },
    {
      from: "payal",
      to: "piya",
      message: "what are you doing today?",
      created_at: new Date()
    },
    {
      from: "maya",
      to: "naina",
      message: "please complete my assignment today!",
      created_at: new Date()
    }
];

Chat.insertMany(allChats);
