const express = require('express');
const router = express.Router();
const BugsReport = require('../models/BugsReport');

router.get('/GetAllBugs', async (req, res) => {
  try {
    const allBugs = await BugsReport.find();
    res.json({status: true, data: allBugs});
  } catch (err) {
    console.log(err);
    res.json({status: false, data: ''});
  }
});

router.post('/postBugReport', async (req, res) => {
  const {nomeUser, emailUser, mensagem} = req.body;
  try {
    console.log(emailUser);
    const bugObject = {
      nomeUser: nomeUser,
      emailUser: emailUser,
      mensagem: mensagem,
    };

    let newBug = new BugsReport(bugObject);

    await newBug.save();

    res.json({status: true, data: 'Correu tudo Bem!'});
  } catch (err) {
    console.log(err);
    res.json({status: true, data: 'Não Inserido!'});
  }
});

module.exports = router;
