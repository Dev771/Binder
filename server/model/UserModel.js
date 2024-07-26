import mongoose from "mongoose";

const UserModel = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    bio: String,
    location: String,
    prefrences: {
        type: [String]
    },
    images: {
        type: [String]
    }
});

export default mongoose.model("UserModel", UserModel);