# Node.js - Laboratorium 9

## `middleware` (https://expressjs.com/en/guide/using-middleware.html)

```javascript
const express = require('express');
const app = express();

const customMiddleware = (req, res, next) => {
    // some logic ...
    next();
};

app.use(customMiddleware);

app.get('/', (req, res) => {
    // ...
});

app.listen(4000, () => console.log('start server'));
```
## Zadania do wykonania na laboratorium

1. Stwórzmy swoje pierwsze oprogramowanie pośrednie(`middleware`). Zadaniem `middleware` będzie nasłuchiwanie wszystkich żądań do serwera i wyświetlenie w konsoli informacji na jaki adres użytkownik próbuje się dostać, jaką metodą oraz czy zawiera w sobie parametry.

2. Kolejnym zadaniem jest stworzenie `middleware`, który zabezpieczy naszą aplikację dla osób nie upoważnionych. Użytkownik powinien wysłać w nagłówku token, który autoryzuje go i wpuszcza do dalszej części aplikacji.
Przyjmijmy że nazwa nagłówka to `access-token`, a wartość która wpuszcza nas to systemu `alamakota`.

3. Stwórzmy middleware, który przeparsuje naszą zawartość żądania na format JSON i przekaże ją dalej.

4. Wykorzystując zewnętrzny `middleware` `body-parser`, odczytajmy zawartość żądania typu `text` i sprawdźmy czy w przesłanym przez użytkownika tekście nie zostały umieszczone niecenzuralne słowa. Jeżeli jakieś słowo podane ze słownika znajduje się w żądaniu zakończmy cykl wysyłając błąd dla użytkownika końcowego(status błędu `400`).
Przykładowy słowinik zakazanych słów: `['disco polo', 'piwo', 'hazard', 'cukierki']`

> Stwórzmy tutaj dodatkowo `REST API` do zapisu i wyświetlania zawartości przesłanego tekstu przez użytkownika. Zapiszmy to na dysku w pliku tektowym

5. Stwórzmy `middleware`, który sprawdzi czy podana ścieżka jest ścieżką do pliku fizycznego na dysku. Jeżeli tak to powinniśmy ten plik wysłać do klienta. Jeżeli jednak nie możemy odnaleźć, powinniśmy przesłać dalej wykonywanie naszego żądania.