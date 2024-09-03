import sequelize from "../database/database.js";
import { DataTypes } from "sequelize";

const City = sequelize.define(
  "city",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      field: "city_id",
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lon: {
      type: DataTypes.FLOAT(),
      allowNull: false,
    },

    lat: {
      type: DataTypes.FLOAT(),
      allowNull: false,
    },

    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },

  {
    indexes: [
      {
        unique: true,

        fields: ["name", "country"],
      },
    ],
  }
);

export default City;
