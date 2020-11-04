const WilderModel = require("../models/Wilder");

module.exports = {
  get: (req, res) => {
    WilderModel.find({})
      .then((wilders) => {
        res.json({ wilders });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  },
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
  update: (req, res) => {
    const id = req.params.id;
    WilderModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    })
      .then((result) => {
        res.json({ result });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  },
};
