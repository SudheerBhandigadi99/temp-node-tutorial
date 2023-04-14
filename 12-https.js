const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url === '/'){
        res.end('Welcome to your home page.');
    }

    if(req.url === '/about'){
        res.end('Here is your short history');
    }
    
    if(req.url === '/error'){
        res.end(
            '<h1>Oops!</h1><p>We cant find the page you are looking for </p><a href="/">back home</a>'
            );
        }

    // res.write('<h1>Oops!</h1><p>We cant find the page you are looking for </p><a href="/">back home</a>'); 
})

server.listen(5000)