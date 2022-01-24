const mongoose = require('mongoose');

const BugsReport = mongoose.Schema({
  nomeUser: {
    type: String,
  },
  emailUser: {
    type: String,
  },
  mensagem: {
    type: String,
    required: [true, 'Deve preencher o campo da Mensagem'],
  },
});

module.exports = mongoose.model('BugsReport', BugsReport);
