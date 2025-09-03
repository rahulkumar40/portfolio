const express = require('express')

const router = express.Router();
const {mailR,getAllUserMessage ,deleteSingleUMessage} = require("../controller/userController");

// contact page router or api 
router.post("/mailSend", mailR);
router.get("/getUserRequestToConnect", getAllUserMessage)
router.delete("/deleteSingleRequestMessage", deleteSingleUMessage)

module.exports = router;