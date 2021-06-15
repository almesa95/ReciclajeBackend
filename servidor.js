const express = require("express");
const mongoose = require("mongoose");
const datos = require("./schema/comoReciclar");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 4000;
app.use(express.json());

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  datos.find({}).then((result) => {
    res.send(result);
    console.log(result);
  });
});

mongoose.connect(
  "mongodb+srv://andrea:reciclaje@cluster0.xfifi.mongodb.net/reciclaje",

  {
    useNewUrlParser: true,
  },
  () => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);
