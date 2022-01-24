import mongodb from 'mongodb';

let client;
export default class LoginDAO {
  static async injectDB(conn) {
    if (client) {
      return;
    }
    try {
      client = await conn.db(process.env.RESTAULAS_NS).collection('Login');
    } catch (e) {
      console.error(`Unable to establish a collection handle in AppIPVC: ${e}`);
    }
  }

  static async Login(email, password) {
    try {
      const pipeline = [
        {
          $match: {
            email: email,
            password: password,
          },
        },
      ];
      return await client.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in Login: ${e}`);
      throw e;
    }
  }
}
