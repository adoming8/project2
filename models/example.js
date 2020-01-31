module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("areYouSmart", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
