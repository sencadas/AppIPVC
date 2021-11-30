import express from 'express';
import AulasController from './aulas.controller.js';
import PlanCurr from './planCurr.controller.js';

const router = express.Router();

router.route('/aulas').get(AulasController.apiGetAulas);
router.route('/aulas/id/:id').get(AulasController.apiGetAulaById);
router.route('/planosCurriculares').get(PlanCurr.apiGetPlanCurr);

export default router;
