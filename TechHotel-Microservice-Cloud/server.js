const express = require("express");
const app = express();

app.use(express.static('./dist/tech-hotel'));

app.get('/*', function(req, res) {
  res.sendFile("index.html", { root: "dist/tech-hotel/" });
});

app.listen(process.env.PORT || 4200);

console.log("App running in the port " + (process.env.PORT || 4200));

