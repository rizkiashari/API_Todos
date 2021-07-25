require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./src/routes");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
