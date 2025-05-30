const { name } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testapp1", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

const userSchema = new mongoose.Schema({
    username:String,
    imageurl:String,
    email:String}) ;



   module.exports = mongoose.model('user', userSchema);