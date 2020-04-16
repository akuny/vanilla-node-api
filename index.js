require('dotenv').config();

const server = require('./app/server');
const port = process.env.PORT;

server.listen(port, 'localhost', () => {
    console.log(`Server up and running on ${port}`); 
});
