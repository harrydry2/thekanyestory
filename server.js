const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressStaticGzip = require("express-static-gzip");
const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", expressStaticGzip("dist"));

require("./routes/emailRoutes")(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const PORT = process.env.PORT || 7101;
app.listen(PORT, () => console.log("listening"));
