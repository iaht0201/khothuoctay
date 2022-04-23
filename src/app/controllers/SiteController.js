const Product = require('../models/Products');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  //[Get] news
  show(req, res, next) {
    // res.send("COURSE DETAIL" + req.params.slug )
    // Product.find({}, (err, product)=> {
    //   if (!err) {
    //     return  res.json() ;
    //   }
    //   return res.status(400).json({error : "Erro"})

    // })
    // Product.findOne({}, function (err, product) {
    //   if (!err) res.json(product);
    // });
  }
  show(req, res, next) {
    // res.send("COURSE DETAIL" + req.params.slug )
     Product.find({})
      .then((product) =>
        res.render('home', { product: mutipleMongooseToObject(product) }),
      )
      .catch(next);
  }
}
module.exports = new SiteController();
