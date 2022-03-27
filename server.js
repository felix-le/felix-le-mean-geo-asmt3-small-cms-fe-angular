const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/mean-small-cms"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/mean-small-cms/index.html"));
});
app.listen(process.env.PORT || 8080);
