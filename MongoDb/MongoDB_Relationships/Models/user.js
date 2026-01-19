const mongoose = require("mongoose");
const {Schema} = mongoose
main()
    .then(() =>console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

//One to few MongoDB relationship -> store the child document inside parent

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ]
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = new User({
        username : "sherlokholmes",
        addresses: [
            {
                location: "B121 Baker street",
                city: "London"
            },
        ],
    });
    user1.addresses.push({location: "C453 Wallstreet", city: "London"});
    let result = await user1.save()
    console.log(result);
};

addUsers();

