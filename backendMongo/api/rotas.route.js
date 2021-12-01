import express from 'express';
import AulasController from './aulas.controller.js';
import PlanCurr from './planCurr.controller.js';
import calendarioLetivoController from './calendarioLetivo.js';

const router = express.Router();

router.route('/aulas').get(AulasController.apiGetAulas);
router.route('/aulas/id/:id').get(AulasController.apiGetAulaById);
router.route('/planosCurriculares').get(PlanCurr.apiGetPlanCurr);
router
  .route('/calendarioLetivo')
  .get(calendarioLetivoController.apiGetCalendarioLetivo);

export default router;
