const siteRouter = require('./site');
const productRouter = require('./product')
const route = (app) => {
  app.use('/', siteRouter);
  app.use('/product', productRouter);
};
module.exports = route;
