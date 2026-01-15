//Implement the same order processing workflow using both promise chains and async/await to understand their differences.

// These functions simulate order processing steps
function validateOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Order ${orderId} validated`);
            resolve(`Order ${orderId} validated`);
        }, 1000);
    });
}

function processPayment(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment processed for order ${orderId}`);
            resolve(`Payment processed for order ${orderId}`);
        }, 2000);
    });
}

function shipProduct(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Order ${orderId} shipped`);
            resolve(`Order ${orderId} shipped`);
        }, 1000);
    });
}

/* Tasks:
1. Implement processOrderWithPromises(orderId) using .then() chains
2. Implement processOrderWithAsync(orderId) using async/await
3. Call both and compare their behavior
*/

function processOrderWithPromises(orderId) {
    return validateOrder(orderId)
        .then(() => {
            return processPayment(orderId);
        })
        .then(() => {
            return shipProduct(orderId);
        })
        .then(() => {
            console.log(`Order ${orderId} completed`);
        })
        .catch((error) => {
            console.error(`Error in processing order: ${orderId}`);
            throw error;
        });
}


async function processOrderWithAsync(orderId) {
    try {
        await validateOrder(orderId);
        await processPayment(orderId);
        await shipProduct(orderId);

        console.log(`Order ${orderId} completed`);
    } catch (error) {
        console.error(`Error in processing order: ${orderId}`);
    }
}

async function runSequentially() {
    await processOrderWithPromises(2);
    await processOrderWithAsync(3);
}

/*This function make sures processOrderWithAsync() runs only when 
processOrderWithPromises() execution is completed.*/

runSequentially();