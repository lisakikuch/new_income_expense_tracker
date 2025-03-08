const express = require('express');
const router = express.Router();
const user = require('../models/userModel');

router.get('/', async (req, res) => {
    res.send("Hello from userRoutes");
});

module.exports = router;