import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716940800&semt=ais_user"
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;