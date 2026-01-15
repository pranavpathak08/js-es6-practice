/* You're given two functions that simulate API calls. 
Create a function that fetches both user data and posts, handling any errors that occur. */

// These functions simulate API calls - don't modify them
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject(new Error("Invalid user ID"));
            }
            resolve({ id: userId, name: `User${userId}`, email: `user${userId}@example.com` });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 2) {
                reject(new Error("Failed to fetch posts"));
            }
            resolve([
                { id: 1, title: "Post 1", userId },
                { id: 2, title: "Post 2", userId }
            ]);
        }, 1000);
    });
}

/*Your task: Write an async function getUserWithPosts(userId) that fetches both the user and their posts, 
combines them into a single object, and handles errors properly. */

async function getUserWithPosts(userId) {
    try {
        const user = await fetchUser(userId);
        const posts = await fetchPosts(userId);

        return {
            user,
            posts
        }

    } catch (error) {
        console.error("Error ", error.message);  
        throw error;
    }

    
}

(async () => {
    try {
        //Test cases
        // const result = await getUserWithPosts(2); 
        // const result = await getUserWithPosts(1);
        const result = await getUserWithPosts(0);
        console.log(result)
    } catch (error) {
        console.error("Caught error: ", error.message);
    }
})();