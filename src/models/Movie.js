const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("movie", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.INTEGER,
        },
        actors: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        producers: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        directors: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        }
    })
};