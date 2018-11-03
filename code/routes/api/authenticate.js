const db = require("../../models");
const passport = require("../../config/passport/passport")

module.exports = (app) => {
    app.post('/api/login',
        passport.authenticate('local'),
        function (req, res) {
            console.log(res)
            res.send(200);
        })

    // Used for creating an account
    app.post("/api/signup", function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then((data) => {
            res.json(data);
        })
            .catch((err) => {
                console.log("Error:", err);
                res.json(err);
            })
    });
};