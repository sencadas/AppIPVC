import express from "express";
import AulasController from "./aulas.controller.js";

const router = express.Router();

router.route("/").get(AulasController.apiGetAulas);
router.route("/id/:id").get(AulasController.apiGetAulaById);

export default router;
