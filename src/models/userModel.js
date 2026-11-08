import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true, minlength: 6 
    },
    email: {
        type: String,
        required: true, 
    }
}, { versionKey: false, timestamps: true });

const User = mongoose.model("User", userSchema);

export { User };