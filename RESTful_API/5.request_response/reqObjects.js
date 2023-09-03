const express = require('express');
const app = express();

app.use(express.json());

app.get('/:name', (req, res)=> {
    console.log(req.params.name);
    res.status(200).json({
        message : 'All about request objects.',
    });
});

app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(3000, ()=> {
    console.log('Server is started.');
});
