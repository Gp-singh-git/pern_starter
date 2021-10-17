const { showUsers } = require('../db/apiqueries');

module.exports = function (router) {
  router.get('/users', (req, res) => {
    showUsers().then((data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
