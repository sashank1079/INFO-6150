
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb+srv://sashank:sashank@cluster0.kiquxzo.mongodb.net/?retryWrites=true&w=majority";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
    console.log("Database connection established successfully");
});

app.use(express.json());

app.use(cors());

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(8000, () => {
    console.log("Successfully started the server");
});