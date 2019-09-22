const express = require("express");
const morgan = require("morgan");
const cookeiSession = require("cookie-session");
const passport = require("passport");

require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const config = require("./config/keys");

const app = express();

app.use(
  cookeiSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]
  })
);
app.use(morgan("combined"));
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(console.log("Connected to mongo DB"))
  .catch(err => console.error("Cannot connect to Mongo DB", err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
