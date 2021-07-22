const Authors = require("../models/authors.model");

module.exports = {
    create: function (req, res) {
        console.log("create method executed");

        Authors.create(req.body)
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getAll(req, res) {
        console.log("getAll method executed");

        Authors.find()
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params);

        Authors.findById(req.params)
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    delete(req, res) {
        console.log("Delete method executed", "url params", req.params);

        Authors.findByIdAndDelete(req.params)
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    update(req, res) {
        console.log("update method executed", "url params: ", req.params);

        Authors.findByIdAndUpdate(req.params, req.body)
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // createMany(req, res) {
    //     const promises = req.body.map((authors) => {
    //         return Authors.create(authors);
    //     });

    //     Promise.allSettled(promises).then((results) => {
    //         res.json(results);
    //     });
    // },
};