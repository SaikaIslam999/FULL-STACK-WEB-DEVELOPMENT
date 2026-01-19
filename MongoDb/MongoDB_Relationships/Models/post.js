const mongoose = require("mongoose");
const {Schema} = mongoose
main()
    .then(() =>console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// One to squillions -> Store a reference to the parent document inside child

const userSchema = new Schema({
    username: String,
    email: String
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post =mongoose.model("Post", postSchema);

// const addData = async () => {
//     let user = await User.findOne({username: "SaikaIslam"});

//     let post2 = new Post({
//         content: "Bye Bye",
//         likes: 48,
//     });

//     post2.user = user;
//     //await user1.save();
//     await post2.save();
// };

// addData();

const getData = async () => {
    let res = await Post.findOne({}).populate("user", "username");
    console.log(res);
};

getData();