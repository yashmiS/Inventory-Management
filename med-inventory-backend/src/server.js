const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();

app.use(express.json());

const username = "admin";
const password = "1234";
const dbname = "healthlinedb";

// mongodb+srv://admin:<password>@cluster0.oflcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

try {
  mongoose.connect(
    `mongodb+srv://admin:1234@cluster0.oflcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
} catch (e) {
  console.log(e);
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
