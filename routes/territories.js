var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  const result = await fetch(
    "https://netzwelt-devtest.azurewebsites.net/Territories/All"
  );
  const data = await result.json();

  res.json(data);
});

module.exports = router;
