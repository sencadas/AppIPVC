import LoginDAO from '../dao/LoginDAO.js';

export default class LoginController {
  static async apiLogin(req, res, next) {
    try {
      let email = req.params.email || {};
      let password = req.params.password || {};
      let cliente = await LoginDAO.Login(email, password);
      if (!cliente) {
        res.status(404).json({error: 'Not found'});
        return;
      } else {
        res.json(cliente);
      }
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({error: e});
    }
  }
}
