  const Course = require("../models/Products");
  const { mongooseToObject } = require("../../util/mongoose");
  const Products = require("../models/Products");
  class ProdcutController {
    //[Get] news
    show(req, res ,next) {
      Products.findOne({ _id: req.params.slug })
        .then((product) =>
          res.render("product/show", { detail: product._doc.detail , product : mongooseToObject(product) }),
          console.log(req)
        )
        .catch(next);  

      // Products.findOne({_id : req.params.slug} , (errr,product) => {
      //   res.json(product)
      // })
    }
  }
  module.exports = new ProdcutController();
