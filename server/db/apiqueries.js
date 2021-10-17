const pool = require('./db_connect')

const showUsers = () => {
  return pool.query("Select * from users")
  .then((result) => result.rows)
  .catch((error) => console.log(error.message)); 

};
exports.showUsers = showUsers;