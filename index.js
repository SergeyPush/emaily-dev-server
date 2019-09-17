const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// Client ID: 948465709883-qs68vmg00jutte5mo166ceae12cu57ks.apps.googleusercontent.com
// Client Secret: _qWzWv1SygCA_snCoKoVKiuV

passport.use(new GoogleStrategy());

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
