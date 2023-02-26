let app = require('express')(); // express object
let mongoClient = require('mongodb').MongoClient; // mongodb client
let cors = require('cors'); // cors
let parser = require('body-parser'); // parser
let PORT = 8080; // port for express
let DB_URL = 'mongodb://localhost:27017'; // db url
app.use(parser.json()); // add cors & body paraser to the express
app.use(cors()); // enabling cors
app.listen(PORT, () => console.log(`Server started at ${PORT}`));

app.get('/employees', (request, response) => {});
