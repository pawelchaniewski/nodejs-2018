console.log("starting app");

const promiseToDoHomework = new Promise(function(resolve, reject) {
    let isDone = true;

    if (isDone) {
        resolve("Done");
    } else {
        reject("not Done!");
    }
});

promiseToDoHomework
    .then(function(fromResolve) {
        console.log("My homework is " + fromResolve);
    })
    .catch(function(fromReject) {
        console.log("My homework is " + fromReject);
    });

// More promises...
const myPromise = new Promise(function(resolve, reject) {
    // Doing something...
    setTimeout(function() {
        resolve("Something is done!");
    }, 50);
});

myPromise.then(fromResolve => {
    console.log(fromResolve);
});

// And now something completely different

function delay(time) {
    return new Promise((resolve, reject) => {
        if (isNaN(time)) {
            // Now listen carefully.. here's the thing, if you omit return
            // Instructions below will execute  (just use arrow func)
            return reject(new Error("Delay requires a valid number!"));
        }
        console.log("Is it?");
        setTimeout(resolve, time);
    });
}

// delay(1000)
//     .then(() => console.log("The time has come!"))
//     .catch(err => console.log("Whoops! It's fucked..." + err));

// Break stuff
delay("100ddd0")
    .then(() => console.log("The time has come!"))
    .catch(err => console.log("Whoops! It's fucked..." + err));

console.log("end app");
