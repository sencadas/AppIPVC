const express = require('express');
const router = express.Router();
const CalendarioLetivo = require('../models/CalendarioLetivo');

router.get('/getCalendarioLetivo', async (req, res) => {
  try {
    const allCalendario = await CalendarioLetivo.find();

    res.json({status: true, data: allCalendario});
  } catch (err) {
    console.log(err);
    res.json({status: false, data: ''});
  }
});

module.exports = router;
