//Take the nested callback code below and refactor it to use promises and async/await.

// Original callback-based code
// function makePizza(callback) {
//     console.log("Starting pizza preparation...");
    
//     setTimeout(() => {
//         console.log("Preparing base...");
//         setTimeout(() => {
//             console.log("Adding sauce...");
//             setTimeout(() => {
//                 console.log("Adding cheese and toppings...");
//                 setTimeout(() => {
//                     console.log("Baking pizza...");
//                     setTimeout(() => {
//                         callback("Pizza is ready!");
//                     }, 2000);
//                 }, 3000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }

// makePizza((result) => {
//     console.log(result);
// });


//Refactoring
function prepareBase() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Preparing base...");
            resolve();
        }, 1000)
    });
}

function addSauce() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Adding sauce...");
            resolve();
        }, 1000)
    })
}

function addToppings() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Adding cheese and toppings...");
            resolve();
        }, 1000)
    })
}

function bakePizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Baking pizza...");
            resolve();
        }, 1000)
    })
}

//Promise Chaining

// function makePizzaWithPromises() {
//     return prepareBase()
//         .then(() => {
//             return addSauce();
//         })
//         .then(() => {
//             return addToppings();
//         })
//         .then(() => {
//             return bakePizza();
//         })
//         .then(() => {
//             console.log("Pizza Ready!")
//         })
// }

// makePizzaWithPromises();

//Async-Await

async function makePizzaWithAsync() {
    try {
        await prepareBase();
        await addSauce();
        await addToppings();
        await bakePizza();

        await new Promise((resolve) => { //Inline promise - we could have defined a function separately too!
            setTimeout(() => {
                console.log("Pizza Ready!")
            }, 3000)
        })

    } catch (error) {
        console.error("Error in baking pizza");
    }
}

makePizzaWithAsync();