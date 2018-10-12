//functional
const getInventory = (req, res, next) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_inventory()
    .then(product => res.status(200).send(product))
    .catch(err => {
      res.status(500).send({ errorMessage: "It broke, oh no." });
      console.log(err);
    });
};
//currently not functional
const addProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .add_product(name, price, img)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "It broke, owie." });
      console.log(err);
    });
};

const update = (req, res, next) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .update_product()
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Did not update" });
      console.log(err);
    });
};

const deleteProduct = (req, res, next) => {
  const dbInstance = res.app.get("db");
  const { params } = req;

  dbInstance
    .delete_product(params.id)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong." });
      console.log(err);
    });
};

module.exports = {
  getInventory: getInventory,
  addProduct: addProduct,
  update: update,
  deleteProduct: deleteProduct
};
