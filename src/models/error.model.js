import sequelize from "../database/database.js";
import { DataTypes } from "sequelize";

export const Error = sequelize.define("error", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },

  status: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  stack: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
