import PlanCurrDAO from '../dao/planCurrDAO.js';

export default class PlanCurrController {
  static async apiGetPlanCurr(req, res, next) {
    const planCurrPerPage = req.query.planCurrPerPage
      ? parseInt(req.query.planCurrPerPage, 10)
      : 200;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.nome) {
      filters.nome = req.query.nome;
    } else if (req.query.cred) {
      filters.cred = req.query.cred;
    } else if (req.query.ano) {
      filters.ano = req.query.ano;
    } else if (req.query.semestre) {
      filters.semestre = req.query.semestre;
    }

    const {planCurrList, totalNumPlanCurr} = await PlanCurrDAO.getPlanCurr({
      filters,
      page,
      planCurrPerPage,
    });

    let response = {
      planCurr: planCurrList,
      page: page,
      filters: filters,
      entries_per_page: planCurrPerPage,
      total_results: totalNumPlanCurr,
    };
    res.json(response);
  }
}
