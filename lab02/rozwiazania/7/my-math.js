
module.exports.multiply = function (a, b, callback) {
    const result = a * b;
    setTimeout(function () {
        callback(result);
    })
};

module.exports.divide = function (a, b, callback) {
    const result = a / b;
    setTimeout(function () {
        callback(result);
    })
};