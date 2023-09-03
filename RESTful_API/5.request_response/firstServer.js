const http = require('http');



const server = http.createServer((req, res) => {
    console.log('First web server');
});

server.listen(3000, ()=> {
    console.log('Server is started');
});
