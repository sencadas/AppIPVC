const mongoose = require('mongoose');

const calendarioLetivo = mongoose.Schema({
  Periodos: {
    PrimeiroSemestre: {
      type: String,
    },
    SegundoSemestre: {
      type: String,
    },
  },
  ParagemLetiva: {
    Natal: {
      type: String,
    },
    Carnaval: {
      type: String,
    },
    Pascoa: {
      type: String,
    },
    SemanaAcademica: {
      type: String,
    },
  },
  Feriados: {
    PrimeiroSemeste: [{type: String}],

    SegundoSemestre: [{type: String}],
  },
  PagamentodePropinas: {
    PrimeiraPrestacao: {
      type: String,
    },
    SegundaPrestacao: {
      type: String,
    },
  },
  DiasComemorativos: {
    IPVC: {
      type: String,
    },
    ESE: {
      type: String,
    },
    ESA: {
      type: String,
    },
    ESTG: {
      type: String,
    },
    ESCE: {
      type: String,
    },
    ESS: {
      type: String,
    },
    ESDL: {
      type: String,
    },
  },
  PeriododeExames: {
    EpocanormaleEpocadeRecurso: {
      PrimeiroSemeste: {
        type: String,
      },
      SegundoSemestre: {
        type: String,
      },
    },
    EpocaEspecial: {
      type: String,
    },
  },
});

module.exports = mongoose.model('calendarioLetivo', calendarioLetivo);
