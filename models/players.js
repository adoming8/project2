module.exports = function (sequelize, Datatypes) {
    const Model = sequelize.define('Player', {
        name: Datatypes.STRING,
        gamerTag: Datatypes.STRING,
        email: Datatypes.STRING,
        password: Datatypes.STRING
    });

    Model.associate = function (models) {
        models.Player.hasMany(models.Score);
    };

    return Model;
}