var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Plans.findAll({}).then(function(dbPlans) {
      res.render("index", {
        msg: "Welcome!",
        Plans: dbPlans
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Plans.findOne({ where: { id: req.params.id } }).then(function(dbPlans) {
      res.render("example", {
        example: dbPlans
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
