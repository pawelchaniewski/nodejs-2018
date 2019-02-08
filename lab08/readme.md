# Node.js - Laboratorium 8

## `express.Router` (https://expressjs.com/en/4x/api.html#router)

```javascript
const express = require('express');
const app = express();
const router  = express.Router(); 

router.use((req, res, next) => {
    // ...
    next();
});

router.get('/', (req, res) => {
    // ...
    res.send('hello world!');
});

app.use(router);

app.listen(4500);
```

## POSTMAN

https://www.getpostman.com/downloads/

## Zadania do wykonania na laboratorium

1. Wykorzystując ścieżki ze wzorcem(string pattern) stwórzmy web serwer, który udostępni końcówkę pozwalającą wyliczyć nam podatek z podanej kwoty i zwróci nam 2 wartości: podatek oraz kwota bez podatku.
```
http://localhost:4500/podate/19/25
gdzie 19 to podatek, a 25 to kwota

w rezultacie: { "tax": 5, "amount": 20 }
```

2. Stwórzmy pierwsze `REST API` które pozwoli nam na zarządzanie naszą listą TODO (klasyczny CRUD).

- dodawanie zadania (`POST`)
- wyświetlane wszystkich zadań (`GET`)
- usunie zadania (`DELETE`)

3. Dodajmy do zadania 2 możliwość modyfikacji naszego rekordu poprzez wysłanie metodą `PUT` nowego obiektu.

4. Dodajmy do naszej aplikacji dodatkowy Route który będzie zarządzał użytkownikami.

- doda nowego użytkownika (`POST`)
- wyświetli użytkowników (`GET`)
- usunie użytkownika (`DELETE`)
- podmieni cały obiekt (`PUT`)
