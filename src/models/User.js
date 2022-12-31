import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        fullName: {type: String, required: true},
        email: {type: String, required: true},
        rg: {type: String, required: true},
        password: {type: String, required: true},
        cep: {type: String, required: true},
        token: {type: Number},
        hash: {type: String}
    }
);

const users = mongoose.model('users', userSchema);

export default users;