const _ = require("lodash");
const Path = require("path-parser");
// const { URL } = require("url");
// const mongoose = require("mongoose");
// const requireLogin = require("../middlewares/requireLogin");
// const requireCredits = require("../middlewares/requireCredits");
// const Mailer = require("../services/Mailer");
// const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

// const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/words/:category", (req, res) => {
    res.send({ category: "food" });
  });
};
