const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Form Submitted Successfully",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});