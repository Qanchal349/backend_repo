/** @format */

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class User extends Model {}

User.init(
  {
    todo: {
      type: DataTypes.STRING,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "todo",
  }
);

module.exports = User;
