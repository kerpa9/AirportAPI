import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Passenger = sequelize.define("passenger", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: "passenger_id",
  },

  nroPassport: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },

  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  lastname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  genre: {
    type: DataTypes.ENUM("male", "female", "Prefer not to say"),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  celphone: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  photo: {
    type: DataTypes.TEXT,
    defaultValue:
      "https://i.pinimg.com/550x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg",
  },

  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

export default Passenger;
