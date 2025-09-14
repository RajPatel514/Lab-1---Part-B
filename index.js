const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);


    // home page route
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading page');
            } else {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });

        // about page
    } else if (req.url === '/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading page');
            } else {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });

        //contact page
    } else if (req.url === '/contact') {
        fs.readFile('./contact.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading page');
            } else {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });

        //css
    } else if (req.url === '/styles.css') {
        fs.readFile('./styles.css', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading CSS');
            } else {
                res.setHeader('Content-Type', 'text/css');
                res.end(data);
            }
        });

        //404 error code when page doesnt find
    } else {
        res.statusCode = 404;
        res.end('Error - 404 - Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
