const express = require("express");
const PORT = 3001;


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api", require("./routes"));

app.listen(PORT);