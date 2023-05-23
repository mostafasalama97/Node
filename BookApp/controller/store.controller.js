const queries = require("../db/dbquery");
const dbconnection = require("../db/dbconnection");
const util = require("../utills/utilty");
exports.getStoreList = async function (req, res) {
  try {
    let storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
    let result = await dbconnection.query(storeListQuery);
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log("error is :" + error);
    res.status(500).send({ error: "server error can not retrive store list" });
  }
};

// {STORENAME} , ${STORECODE} , ${CREATEDON} , ${CREATEDBY})`

exports.InsertStore = async function (req, res) {
  try {
    let STORE_NAME = req.body.storeName;
    // let STORE_CODE = req.body.storeCode
    let CREATED_ON = new Date();
    let CREATED_BY = "mostafa";
    let storeCode = util.generateRandomString();
    if (!STORE_NAME || !storeCode)
      return res
        .status(500)
        .send({ error: "STORE_NAME and STORE_CODE should not be empty" });

    let values = [STORE_NAME, storeCode, CREATED_ON, CREATED_BY];
    storeInsertQuery = queries.queryList.INSERT_STORE;
    let result = await dbconnection.query(storeInsertQuery, values);
    res.status(201).send("new store added correctly");
  } catch (error) {
    console.log("error is :" + error);
    res.status(500).send({ error: "server error can not ADD NEW STORE" });
  }
};
