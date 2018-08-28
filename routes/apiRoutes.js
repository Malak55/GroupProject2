var db = require("../models");

module.exports = function(app) {
  // ************************************************************
  // Plans API routes
  // ************************************************************
  // Get all plans
  app.get("/api/plans", function(req, res) {
    db.Plans.findAll({}).then(function(dbPlans) {
      res.json(dbPlans);
    });
  });

  // Create a new plan
  app.post("/api/plans", function(req, res) {
    db.Plans.create(req.body).then(function(dbPlans) {
      res.json(dbPlans);
    });
  });

  // Delete an Plan by id
  app.delete("/api/plans/:id", function(req, res) {
    db.Plans.destroy({ where: { id: req.params.id } }).then(function(dbPlans) {
      res.json(dbPlans);
    });
  });

  // ************************************************************
  // Users API routes
  // ************************************************************
  // Get all Users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Delete an User by id
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};
