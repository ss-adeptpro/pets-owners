var express = require("express");
var request = require("request");
var router = express.Router();

/* GET owners listing. */
router.get("/", function (req, res, next) {
  request(
    {
      method: "GET",
      uri: "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json",
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.status(200).json(JSON.parse(body));
      }
    }
  );
});

module.exports = router;
