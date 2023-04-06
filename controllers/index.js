var fs = require("fs");
    path = require("path");

exports.Index = async (req, res, next) => {
  res.render('index')
};
