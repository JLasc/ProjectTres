const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const session = require("express-session");
const passport = require("./config/passport/passport.js")


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//sessions
app.use(
  session({
  secret: 'fraggle-rock', 
  resave: false, //required
  saveUninitialized: false //required
  })
)
app.use(passport.initialize())
app.use(passport.session())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

require("./routes/api/authenticate")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const syncOptions = { force: false };
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
