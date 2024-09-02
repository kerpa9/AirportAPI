import app from "./app.js";
import { envs } from "./config/enviroments/enviroments.js";
import { authenticate, syncUp } from "./database/database.js";

// console.log(process.env.PORT);
async function main() {
  try {
    await authenticate();
    await syncUp();
  } catch (err) {
    console.log(err);
  }
}

main();

//PORT IN EXECUITE
app.listen(envs.PORT, () => {
  console.log(`Server listen on port http://localhost:${envs.PORT}  😊😁`);
});
