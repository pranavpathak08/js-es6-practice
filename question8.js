// Compare sequential and parallel execution of async operations.

// API simulation functions - don't modify
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fetched user ${id}`);
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}

function getUserHobbies(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fetched hobbies for user ${id}`);
            resolve(["Reading", "Coding", "Gaming"]);
        }, 1000);
    });
}

function getUserFriends(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fetched friends for user ${id}`);
            resolve([{ id: 2, name: "Friend1" }, { id: 3, name: "Friend2" }]);
        }, 1000);
    });
}

/* Tasks:

1. Create fetchSequentially(userId) - fetch one after another
2. Create fetchInParallel(userId) - fetch all at once
3. Measure and compare execution times */


//Solution

async function fetchSequentially(userId) {
    console.time("Sequential")
    try {
        const user = await getUser(userId);
        const userHobbies = await getUserHobbies(userId);
        const userFriends = await getUserFriends(userId);

        return {user, userHobbies, userFriends};
    } catch (error) {
        console.error(`Error in fetching details for user ${userId}`);
        throw error;
    } finally {
        console.timeEnd("Sequential");
    }
} 

async function fetchInParallel(userId) {
    console.time("Parallel");

    try {
        const [user, hobbies, friends] = await Promise.all([
            getUser(userId),
            getUserHobbies(userId),
            getUserFriends(userId)
        ]);

        return {user, hobbies, friends};

    } catch (error) {
        console.error(`Error in fetching details for user ${userId}`, error);
        throw error;

    } finally {
        console.timeEnd("Parallel");
    }
}

fetchSequentially(1);// Waits for each task before starting the next
fetchInParallel(2); // Promise.all() runs promises concurrently and waits for all to finish