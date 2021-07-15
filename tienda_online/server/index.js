const express = require("express");
const app = express();
const router = require('./routes/route');
require('./utils/db');
const cors = require("cors");

app.use(cors());

app.use("/", router)

app.listen(3001, () => {
    console.log(`Example app listening at http://localhost:3001`);
});
