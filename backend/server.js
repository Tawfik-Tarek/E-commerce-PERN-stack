require("dotenv").config({ path: "./config.env" });

const app = require("./app");

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});