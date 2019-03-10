const express = require('express');
const server = express();

function calcTax(tax, amountWithTax) {
    const amountTax = amountWithTax * tax / 100;
    return {
        tax: amountTax,
        amount: amountWithTax - amountTax
    };
}

server.get('/podatek/:tax/:amount', (req, res) => {
    const { tax, amount } = req.params;
    res.send(calcTax(tax, amount));
});

server.listen(4000, () => console.log('start server'));
