import { createServer } from 'http';

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

import https from 'https';

function getProjects() {
    https.get('https://niivas.github.io/project', (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            console.log(data);
        });
    }).on('error', (err) => {
        console.log('Error: ' + err.message);
    });
}
