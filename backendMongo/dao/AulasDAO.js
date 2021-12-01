import mongodb from 'mongodb';
let aulas;
const ObjectID = mongodb.ObjectId;

export default class AulasDAO {
  static async injectDB(conn) {
    if (aulas) {
      return;
    }
    try {
      aulas = await conn.db(process.env.RESTAULAS_NS).collection('aulasReal');
    } catch (e) {
      console.error(`Unable to establish a collection handle in AppIPVC: ${e}`);
    }
  }

  static async getAulas({filters = null, page = 0, aulasPerPage = 20} = {}) {
    let query;
    //filters por editar...
    if (filters) {
      if ('name' in filters) {
        query = {$text: {$search: filters.name}};
      } else if ('cuisine' in filters) {
        query = {cuisine: {$eq: filters.cuisine}};
      } else if ('zipcode' in filters) {
        query = {'address.zipcode': {$eq: filters.zipcode}};
      }
    }

    let cursor;

    try {
      cursor = await aulas.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return {aulasList: [], totalNumAulas: 0};
    }

    const displayCursor = cursor.limit(aulasPerPage).skip(aulasPerPage * page);

    try {
      const aulasList = await displayCursor.toArray();
      const totalNumAulas = await aulas.countDocuments(query);

      return {aulasList, totalNumAulas};
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      );
      console.log('lista' + aulasList);
      return {aulasList: [], totalNumAulas: 0};
    }
  }
  static async getAula(id) {
    try {
      const pipeline = [
        {
          $match: {
            _id: new ObjectID(id),
          },
        },
      ];
      return await aulas.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getAulasByID: ${e}`);
      throw e;
    }
  }
}
