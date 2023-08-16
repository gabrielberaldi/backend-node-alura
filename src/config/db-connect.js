import mongoose from "mongoose";

const connectionString = "mongodb+srv://gabrielberaldi01:i9dKQLs4cuALH3zH@cluster0.1nlnjpk.mongodb.net/alura-livros?";
mongoose.connect(connectionString);

let db = mongoose.connection;

export default db;