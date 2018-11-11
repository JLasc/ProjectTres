const db = require("../../models");
const passport = require("../../config/passport/passport")

module.exports = (app) => {

    app.post('/api/login',
        passport.authenticate('local'),
        function (req, res) {
            res.json({data:req.user.dataValues});
        })

    // Used for creating an account
    app.post("/api/signup", function (req, res) {
        console.log(req.body)
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }).then((data) => {
            res.json({data:data});
        })
            .catch((err) => {
                console.log("Error:", err);
                res.json(err);
            })
    });

    app.get("/api/logout", function (req, res) {
        console.log(req);
        req.logout();
        res.send(200)
    });
};