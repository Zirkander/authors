const authors = require("../controllers/authors.controller");


module.exports = (app) => {
    app.post('/api/authors', authors.create)
    app.get('/api/authors', authors.getAll)
    app.get('/api/authors/:_id', authors.getOne)
    app.delete('/api/authors/:_id', authors.delete)
    app.put('/api/authors/edit/:_id', authors.update)
}