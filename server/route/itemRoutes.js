const express = require("express");
const router = express.Router();
const { getAllItems, getItemById } = require("../controller/itemControllers");
//desc  GET all items from db
//@route    GET api/items
//@access   Public

router.get("/", getAllItems);

//desc  GET a items by id from db
//@route    GET api/items/:id
//@access   Public

router.get("/:id", getItemById);

module.exports = router;
