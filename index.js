const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).json({status: "success", message: "Hello World!"});
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
