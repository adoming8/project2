var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/all", function(req, res) {
    db.player.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/new", function(req, res) {
    db.player.create({
      name: req.body.name,
        gamerTag: req.body.gamerTag,
        email: req.body.email,
        password: req.body.password
    
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.player.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
