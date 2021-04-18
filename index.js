const fetch = require('node-fetch');
const https = require('https');
const fs = require('fs');

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(json => fs.writeFile('./Result/posts.json', JSON.stringify(json, null, 2),  'utf8', err => {
    if (err) {
        throw err;
    } 
        console.log('file successfully written')
    
}));

