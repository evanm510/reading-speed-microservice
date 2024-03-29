const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-With",
      "Accept",
      "x-client-key",
      "x-client-token",
      "x-client-secret",
      "Authorization",
    ],
    credentials: true,
  })
);

app.post("/reading-speed-test", (req, res) => {
  const { time, words } = req.body;
  const wordsPerMinute = Math.floor((words / time) * 60);
  res.json({ wordsPerMinute });
});

app.post("/reading-time-calculator", (req, res) => {
  const { speed, words } = req.body;
  let totalTimeInMinutes = Math.floor(words / speed);
  let hours = Math.floor(totalTimeInMinutes / 60);
  let minutes = totalTimeInMinutes % 60;
  res.json({ hours, minutes });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
