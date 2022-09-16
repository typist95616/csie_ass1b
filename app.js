const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 5051;

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(_dirname, 'build', 'index.html'));
    })
}

app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log('Server running on port: ', port);
})