const express = require('express');
const app = express();

// Add middleware urlencoded
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    if(req.query.timeout) {
        setTimeout(() => {
            res.send(`Hello World after ${req.query.timeout/1000} seconds.`);
        }, req.query.timeout);
    }
    else {
        res.send('Hello World but please check timeout parameter');
    }
});

app.listen(3000, () => {
    console.log('simple-express listening on port 3000!');
});
