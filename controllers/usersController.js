const db = require("../models");

// Defining methods for the superlatives Controller
module.exports = {
    findAll: function (req, res) {
        db.User
            .findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .update(req.body, {where: { id: req.params.id }} )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .destroy({where: { id: req.params.id }} )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};