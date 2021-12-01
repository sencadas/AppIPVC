import CalendarioLetivoDAO from '../dao/calendarioLetivoDAO.js';

export default class calendarioLetivoController {
  static async apiGetCalendarioLetivo(req, res, next) {
    const planCurrPerPage = req.query.planCurrPerPage
      ? parseInt(req.query.planCurrPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};

    const {planCurrList, totalNumPlanCurr} =
      await CalendarioLetivoDAO.getPlanCurr({
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
