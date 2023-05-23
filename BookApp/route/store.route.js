const express = require("express");
const storeFunction = require("../controller/store.controller");

const router = express.Router();

// get("URL" , functionHandller)

// get all notes
router.get("/store/get", storeFunction.getStoreList);
//  update store
//   router.put('/store/update', storeFunction.updateNote)
//delete store
//   router.delete('/store/delete:noteID', storeFunction.deleteNote)
// save store
router.post("/store/save", storeFunction.InsertStore);

module.exports = router;
