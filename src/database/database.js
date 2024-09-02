import { Sequelize } from "sequelize";
import { envs } from "../config/enviroments/enviroments.js";

const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
});

export async function authenticate() {
  try {
    await sequelize.authenticate;
    console.log("Conection has been established successfully 😊😁");
  } catch (err) {
    throw new Error("Error the authenticate", err);
  }
}

export async function syncUp() {
  try {
    await sequelize.sync();
    console.log("Synchronize has been established successfully 😊😁");
  } catch (err) {
    throw new Error("Error the synchronize", err);
  }
}

export default sequelize;
