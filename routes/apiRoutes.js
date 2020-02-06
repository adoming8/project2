var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/all", function (req, res) {
    db.Player.findAll({}).then(function (player) {
      db.Score.findAll({
        score: req.body.score
      }).then(function (score) {

        res.json({
          player: player,
          score: score
        })
      })

     

  });
   
  });

  // Create a new example
  app.post("/api/new", function (req, res) {

    db.Player.create({
      name: req.body.name,
      gamerTag: req.body.gamerTag,
      email: req.body.email,
      password: req.body.password
    }).then(function (player) {
      player.createScore({
        score: req.body.score
      }).then(function (score) {

        res.json({
          player: player,
          score: score
        })
      })

     

  });
});

// Delete an example by id
app.delete("/api/examples/:id", function (req, res) {
  db.player.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
    res.json(dbExample);
  });
});
};
