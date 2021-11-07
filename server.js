const express = require("express");
const mongoose = require("mongoose");
const { router } = require("./apis.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://ashish:ashishroot@cluster0.zlvgs.mongodb.net/spy_app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("connected to db")
);

app.use('', router);

app.listen(process.env.PORT || 3003, () => {
  console.log("Server is running...");
});