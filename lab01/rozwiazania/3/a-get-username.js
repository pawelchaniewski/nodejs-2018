console.log('start app'); // wyświetlamy informację że nasza aplikacja jest uruchomiona

const os = require('os'); // wczytujemy wbudowany moduł OS i zapisujemy go do zmiennej os
const username = os.userInfo().username; // pobieramy dane o użytkowniku i zapisujemy do zmiennej username
console.log(username); // wyświetlamy nazwę użytkownika w naszym terminalu
