const express = require("express");
const router = express.Router();
const usuarios = require("./usuarios")
const clima = require('./weather')

router.use("/usuarios", usuarios);
router.use("/clima", clima)

module.exports = router;