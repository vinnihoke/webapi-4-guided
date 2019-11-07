// Require .env as early as possible.
require("dotenv").config();

const server = require("./api/server.js");

// I like this destructuring.
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
