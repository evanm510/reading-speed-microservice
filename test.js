const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const baseUrl = "http://localhost:3000";

const readingSpeedTestData = {
  time: 60,
  words: 300,
};

const readingTimeCalculatorData = {
  speed: 150,
  words: 10000,
};

async function testReadingSpeed() {
  try {
    const response = await fetch(`${baseUrl}/reading-speed-test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(readingSpeedTestData),
    });
    const data = await response.json();
    console.log("Reading Speed Test Result:", data);
  } catch (error) {
    console.error("Error in Reading Speed Test:", error);
  }
}

async function calculateReadingTime() {
  try {
    const response = await fetch(`${baseUrl}/reading-time-calculator`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(readingTimeCalculatorData),
    });
    const data = await response.json();
    console.log("Reading Time Calculator Result:", data);
  } catch (error) {
    console.error("Error in Reading Time Calculator:", error);
  }
}

testReadingSpeed();
calculateReadingTime();
