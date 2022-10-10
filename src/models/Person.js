const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('person', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    movieAsActor: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    movieAsProducer: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    movieAsDirector: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    }
  });
};