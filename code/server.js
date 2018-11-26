const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const routes = require("./routes");
const session = require("express-session");
const passport = require("./config/passport/passport.js");
const path= require("path");


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


// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(express.static(path.join("./client/build")));

require("./routes/api/authenticate.js")(app);
app.use(routes);
app.use(passport.session())
// Define API routes here

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
