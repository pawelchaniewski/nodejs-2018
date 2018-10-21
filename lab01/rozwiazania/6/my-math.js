console.log('start math'); // wyświetlamy informację w konsoli że nasz nowy moduł został wczytany

const Pi = 3.14; // deklarujemy zmienną Pi

// deklarujemy funkcję dodwania oraz robimy eksport naszej funkcji tak by inne pliki
// które zaczytają nasz moduł wiedziały że mogą skorzystać z naszej funkcji
module.exports.add = function add(a, b) {
    return a + b;
}
// analogicznie jak przy funkcji dodawania
module.exports.sub = function sub(a, b) {
    return a - b;
}
// w tym przypadku eksportujemy zmienną Pi
module.exports.Pi = Pi;