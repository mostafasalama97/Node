const pool = require("./pool");

// promise
// exports.query = pool.query(queryText, queryParams)
//     .then((res) =>{

//     })
//     .catch((e) => {

//     })

exports.query = (queryText, queryParams) => {
  return new Promise((resolve, reject) => {
    pool
      .query(queryText, queryParams)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
