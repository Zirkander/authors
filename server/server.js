const express = require('express');
const cors = require("cors");

const port = 5000;
const db_name = 'authors';

require("./config/mongoose.config")(db_name);

const app = express();

app.use(express.json());
app.use(cors());
require("./routes/authors.routes")(app);

app.listen(port, () =>
    console.log(`you are now listening at port ${port} `)
);