var express = require("express");
var router = express.Router();

router.post("/login", async function (req, res, next) {
  const result = await fetch(
    "https://netzwelt-devtest.azurewebsites.net/Account/SignIn",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "text/plain",
      },
      body: JSON.stringify(req.body),
    }
  );

  const data = await result.json();

  if (result.status === 200) {
    res.json({
      status: result.status,
      data: data,
    });
  } else if (result.status === 404) {
    res.json({
      status: result.status,
      message: data.message,
    });
  }
});

module.exports = router;
