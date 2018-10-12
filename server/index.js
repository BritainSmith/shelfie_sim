require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const controller = require("./controller");

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(e => console.log(e));

//endpoints
app.get("/api/inventory", controller.getInventory);
//post not functional
app.post("/api/product", controller.addProduct);

app.put("/api/product", controller.update);

app.delete("/api/product/:id", controller.deleteProduct);
const port = 4002;

app.listen(port, () => {
  console.log(`listening on port${port}`);
});
