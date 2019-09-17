const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
