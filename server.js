const express = require("express");
const path = require("path");
const expressStaticGzip = require("express-static-gzip");
const app = express();

app.use("/", expressStaticGzip("dist"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const PORT = process.env.PORT || 7101;
app.listen(PORT, () => console.log("listening"));
