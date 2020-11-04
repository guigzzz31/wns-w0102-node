const WilderModel = require("../models/Wilder");

module.exports = {
  get: async (req, res) => {
    const wilders = await WilderModel.find({});
    res.json({ wilders });
  },
  create: async (req, res) => {
    await WilderModel.init();
    const wilder = new WilderModel(req.body);
    const result = await wilder.save();
    res.status(201).json({ result });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const result = await WilderModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json({ result });
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const result = await WilderModel.findByIdAndDelete(id);
    res.json({ result });
  },
};
