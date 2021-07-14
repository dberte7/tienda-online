const express = require("express");
const app = express();
const router = require('./Routes/route');
require('./utils/db');

app.use("/", router)

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});
