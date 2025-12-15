const mongoose = require('mongoose');

main().then(() => {
    console.log("connection successful");
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

const user2 = new User({
    name:"eve",
    email:"eve@yahoo.in",
    age: 49,
});

User.insertMany([
    {name:"tony",email:"tony@gmail.com",age:50},
    {name:"peter",email:"peter@gmail.com",age:52},
    {name:"bruce",email:"bruce@gmail.com",age:40},
]).then((res) => {
    console.log(res);
});

User.findByIdAndUpdate('693b99a79b8967775b8a7a79', {age: 36}, {new: true}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

User.findOne({name: "eve"}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

User.updateMany({age: {$gt: 48}}, {age: 55}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

User.findOneAndUpdate({name: "eve"}, {age: 36}, {new: true}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

User.findById('693ce1547faea25d1e3666fd').then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

user2.save()
 .then((result) => {
    console.log(result);
})
 .catch((err) => {
    console.log(err);
});