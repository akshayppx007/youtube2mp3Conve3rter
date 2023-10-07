const app = require("./app");
const dotenv = require("dotenv");
// const connectDatabase = require("./config/database");


// config
dotenv.config();

// // database
// connectDatabase();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
