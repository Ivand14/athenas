const server = require("./src/app");
const { conn } = require("./src/db");
require("dotenv").config();
const PORT = process.env.PORT || 5432;

server.listen(3001, async () => {
    await conn.sync({ force: false});
    console.log(`Server listen on port 3001`);
});
