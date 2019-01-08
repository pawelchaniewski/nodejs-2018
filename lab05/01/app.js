const { readFileSync } = require('fs');


try {
    const data = readFileSync('user.json');
    const user = JSON.parse(data);
    console.log(user);
} catch(error) {
    console.log(error.message);
}

// lub 

try {
    const data = readFileSync('_user.json'); // zła nazwa pliku
    try {
        const user = JSON.parse(data);
        console.log(user);
    } catch(error) {
        console.log('blad parsowania')
        // console.log(error.message);
    }
} catch(error) {
    console.log('blad odczytu pliku');
    // console.log(error.message);
}