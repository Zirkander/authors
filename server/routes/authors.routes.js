const products = require("../controllers/products.controller");


module.exports = (app) => {
    app.post('/api/products', products.create)
    app.get('/api/products', products.getAll)
    app.get('/api/products/:_id', products.getOne)
    app.delete('/api/products/:_id', products.delete)
    app.put('/api/products/edit/:_id', products.update)
}