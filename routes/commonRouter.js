const express = require("express");
const { allMessages, getMessage } = require("../controllers/commonController");
const router = express.Router();

router.get("/",allMessages)
router.post('/getMessage/:id',getMessage)
module.exports= router