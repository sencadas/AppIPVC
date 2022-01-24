const express = require('express');
const app = express();
const port = 5000;
require('dotenv').config();
const cors = require('cors');

//conexão bdd mongodb
require('./middleware/mongoDatabase').connect();

app.use(cors({credentials: true, origin: true}));
app.use(express.json());

//routes
//mongo rotas
const BugsRoutes = require('./routes/BugsReport');
const atividadeLetivaRoutes = require('./routes/CalendarioLetivo');

app.use('/api/bugs', BugsRoutes);
app.use('/api/atividadeLetiva', atividadeLetivaRoutes);

app.listen(port, () => {
  console.log(`App Listening http://localhost:${port}`);
});
