const express = require("express");
const app = express();
const PORT = 4040;
const Route = require("./routes/route");
const {connectTodb} = require("./connection");
const cors = require('cors');

connectTodb("mongodb://127.0.0.1:27017/crud-apis").then(() =>
  console.log("DB Connected")
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/notes", Route);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
