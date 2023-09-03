const http = require('http');

const data = [
    {
        id: 1,
        name: "tai"
    },
    {
        id: 2,
        name: "hoa"
    },
    {
        id: 3,
        name: "Thinh"
    }
]
const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Content-language', 'en-US');
    res.setHeader('Date', new Date(Date.now()));
    res.setHeader('X-powered-by', 'Node.js');

    res.end(
        JSON.stringify({
            success: true,
            result: data.length,
            data: data
        })
    );
});

server.listen(3000, ()=> {
    console.log('server is started');
});
