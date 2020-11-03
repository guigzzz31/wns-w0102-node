const WilderModel = require("../models/Wilder");

module.exports = {
  create: (req, res) => {
    WilderModel.init().then(() => {
      const wilder = new WilderModel(req.body);
      wilder
        .save()
        .then((result) => {
          res.status(201).json({ result });
        })
        .catch((err) => {
          res.status(500).json({ err });
        });
    });
  },
};
