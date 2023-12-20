'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  // define the convertHandler object to use its methods
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function (req, res) {
    let unitNum = convertHandler.getNum(req.query.input);
    let unitUnit = convertHandler.getUnit(req.query.input);
    res.json({ num: unitNum, unit: unitUnit });
  });

};
