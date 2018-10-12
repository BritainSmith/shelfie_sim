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

module.exports = {
  getInventory: getInventory
};
