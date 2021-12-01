import express from 'express';
import cors from 'cors';
//este import representa o export default da rota , neste caso representa o router
import rotas from './api/rotas.route.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes da app
app.use('/api/', rotas);
//se for para uma pagina que nao exista no route file
app.use('*', (req, res) => res.status(404).json({error: 'not found'}));

export default app;
