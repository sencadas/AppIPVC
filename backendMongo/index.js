import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import AulasDAO from './dao/AulasDAO.js';
import PlanCurrDAO from './dao/planCurrDAO.js';
import CalendarioLetivoDAO from './dao/calendarioLetivoDAO.js';

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.RESTAULAS_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 250,
  useNewUrlParser: true,
})
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async client => {
    // injetar a base de dados para o DAO(Data Access Object) de Aulas
    await AulasDAO.injectDB(client);
    await PlanCurrDAO.injectDB(client);
    await CalendarioLetivoDAO.injectDB(client);

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
