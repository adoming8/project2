module.exports = function (sequelize, Datatypes) {
    const Model = sequelize.define('Score', {
        score: Datatypes.INTEGER,
        

    });

    Model.associate = function (models) {
        models.Score.belongsTo(models.Player);
    };

    return Model;
}