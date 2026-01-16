// Build a weather data fetcher with retry logic and timeout handling.

// Simulated weather API - don't modify
function fetchWeather(city) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 4000;
        const shouldFail = Math.random() < 0.3;
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`Failed to fetch weather for ${city}`));
            } else {
                resolve({
                    city,
                    temperature: Math.floor(Math.random() * 35) + 10,
                    condition: ["Sunny", "Cloudy", "Rainy"][Math.floor(Math.random() * 3)]
                });
            }
        }, delay);
    });
}

/* Your tasks:

1. Implement fetchWithRetry(city, maxRetries = 3)

    Retry failed requests up to maxRetries times
    Wait 1 second between retries
    Throw error if all retries fail

2. Implement fetchWithTimeout(promise, timeoutMs = 5000)

    Reject if promise takes longer than timeoutMs
    Return result if completes in time

3. Implement getWeatherForCities(cities)

    Fetch weather for multiple cities
    Use Promise.allSettled()
    Return object with successful and failed results */


// Helper delay() function

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(city, maxRetries = 3) {
    let retryCounter = 0;
    
    while (retryCounter < maxRetries) {
        try {
            console.log(`Retry ${retryCounter + 1}`)
            const res = await fetchWeather(city);
            return res;
        } catch (error) {
            retryCounter++;

            if (retryCounter === maxRetries) {
                throw error;
            }

            console.log("Retrying in 1 second");
            await delay(1000);
        }
    }
}

// const data = await fetchWithRetry("Mumbai", 3)
// console.log(data)

function fetchWithTimeout(promise, timeoutMs = 5000) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request timed out"));
        }, timeoutMs)
    });

    return Promise.race([promise, timeoutPromise]);
}

// const res = await fetchWithTimeout(fetchWeather("Mumbai"), 5000);
// console.log(res);


async function getWeatherForCities(cities) {
    const weatherPromises = cities.map(city => {
        return fetchWeather(city)
    })

    const results = await Promise.allSettled(weatherPromises); //Promise.allSettled() : waits for all promises to be completed either
    const successful = []                                      // successful or fail
    const failed = []

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            successful.push(result.value);
        } else {
            failed.push({
                city: cities[index],
                error: result.reason.message
            })
        }
    })

    return {
        successful,
        failed
    };
}


const res = await getWeatherForCities(["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"])
console.log(res);
