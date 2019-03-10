const http = require('http');

// adres: http://localhost:4700/?name=Jan

const server = http.createServer((req, res) => {

    // jedną z opcji aby pobrać 'name' z naszego adresu jest użycie wbudowanego modułu URL aby przeparsować nasz adres
    const address = `http://${req.headers.host}${req.url}`;
    const url = new URL(address);
    const name = url.searchParams.get('name');

    const welcomeMessage = name ? `hello ${name}!` : 'hello!';

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(welcomeMessage);
});

server.listen(4700);