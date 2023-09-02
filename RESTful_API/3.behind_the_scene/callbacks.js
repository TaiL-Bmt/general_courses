let fs = require('fs');

// let data = fs.readFileSync('example.txt');
// console.log(data.toString());


fs.readFile('example.txt', (err, data) => {
    if (err)
        return console.log(err);
    console.log(data.toString());
})

console.log('Program Ended');
