This microservice provides two primary functions related to reading analytics:

1. Reading Speed Test: Calculates the user's reading speed in words per minute.
2. Reading Time Calculator: Estimates the time it will take to read a given number of words at a specified speed.

API Endpoints

Reading Speed Test
Endpoint: POST /reading-speed-test

Description: This endpoint calculates reading speed based on the total time spent and the number of words read.

Request Body:

time: Total reading time in seconds.
words: Total number of words read.

Example Request:

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const readingSpeedTestData = { time: 60, words: 300 };
fetch('http://localhost:3000/reading-speed-test', {
method: 'POST',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify(readingSpeedTestData)
})
.then(response => response.json())
.then(data => console.log('Reading Speed Test Result:', data));

Reading Time Calculator
Endpoint: POST /reading-time-calculator

Description: Calculates the estimated reading time for a given number of words at a specified reading speed.

Request Body:

speed: Reading speed in words per minute.
words: Total number of words to read.

Example Request:

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const readingTimeCalculatorData = { speed: 150, words: 10000 };
fetch('http://localhost:3000/reading-time-calculator', {
method: 'POST',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify(readingTimeCalculatorData)
})
.then(response => response.json())
.then(data => console.log('Reading Time Calculator Result:', data));

Receiving Responses
Responses for both endpoints will be in JSON format.

Reading Speed Test Response:

{ "wordsPerMinute": calculated speed }

Reading Time Calculator Response:

{ "hours": hours, "minutes": minutes }
Ensure to handle responses appropriately in your application, displaying or processing the data as needed.

<img width="778" alt="Screenshot 2024-02-23 at 9 13 46 AM" src="https://github.com/evanm510/reading-speed-microservice/assets/112014100/d7e84c70-c604-4d8c-86c4-8c9abc2d698d">
