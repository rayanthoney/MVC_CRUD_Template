const itemlist = require("../models/itemlist");
const ItemList = require("../models/itemlist");

module.exports = {
  getEdit: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const items = await ItemList.find();
      res.render("edit.ejs", { itemList: items, idItem: id });
    } catch (error) {
      if (error) return res.status(500).send(error);
    }
  },
  deleteItem: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await itemlist.findByIdAndDelete(id);
      console.log(result);
      res.redirect("back");
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
  updateItem: async (req, res) => {
    const id = req.params.id;
    try {
      await itemlist.findByIdAndUpdate(
        id, 
        {
        textInput: req.body.textInput,
        numInput: req.body.numInput,
        }
      );
      res.redirect("/");
    } catch (error) {
      if (error) return res.status(500).send(error);
      res.redirect("/");
    }
  },
};
