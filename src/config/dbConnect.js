import mongoose from "mongoose";

mongoose.connect("mongodb+srv://resilia:123@cluster0.rhnstip.mongodb.net/project-m2");

let db = mongoose.connection;

export default db;