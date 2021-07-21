const Products = require("../models/products.model");

module.exports = {
    create: function (req, res) {
        console.log("create method executed");

        Products.create(req.body)
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getAll(req, res) {
        console.log("getAll method executed");

        Products.find()
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params);

        Products.findById(req.params)
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    delete(req, res) {
        console.log("Delete method executed", "url params", req.params);

        Products.findByIdAndDelete(req.params)
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    update(req, res) {
        console.log("update method executed", "url params: ", req.params);

        Products.findByIdAndUpdate(req.params, req.body)
            .then((products) => {
                res.json(products);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // createMany(req, res) {
    //     const promises = req.body.map((products) => {
    //         return Products.create(products);
    //     });

    //     Promise.allSettled(promises).then((results) => {
    //         res.json(results);
    //     });
    // },
};