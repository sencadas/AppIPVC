import AulasDAO from "../dao/AulasDAO.js";

export default class AulasController {
  static async apiGetAulas(req, res, next) {
    const aulasPerPage = req.query.aulasPerPage
      ? parseInt(req.query.aulasPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    //filters...

    // verificar os filters
    let filters = {};
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine;
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode;
    } else if (req.query.name) {
      filters.name = req.query.name;
    }

    const { aulasList, totalNumAulas } = await AulasDAO.getAulas({
      filters,
      page,
      aulasPerPage,
    });

    let response = {
      aulas: aulasList,
      page: page,
      filters: filters,
      entries_per_page: aulasPerPage,
      total_results: totalNumAulas,
    };
    res.json(response);
  }

  static async apiGetAulaById(req, res, next) {
    try {
      let id = req.params.id || {};
      let aula = await AulasDAO.getAula(id);
      if (!aula) {
        res.status(404).json({ error: "Not found" });
        return;
      } else {
        res.json(aula);
      }
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
