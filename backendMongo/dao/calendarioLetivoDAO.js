//DAO - Data Acess object
import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectID;
let planCurr;

export default class CalendarioLetivoDAO {
  static async injectDB(conn) {
    if (planCurr) {
      return;
    }
    try {
      planCurr = await conn
        .db(process.env.RESTAULAS_NS)
        .collection('calendarioLetivo');
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in calLetivoDAO: ${e}`,
      );
    }
  }

  static async getPlanCurr({
    filters = null,
    page = 0,
    planCurrPerPage = 20,
  } = {}) {
    let query;

    let cursor;

    try {
      cursor = await planCurr.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return {planCurrList: [], totalNumPlanCurr: 0};
    }

    const displayCursor = cursor
      .limit(planCurrPerPage)
      .skip(planCurrPerPage * page);

    try {
      const planCurrList = await displayCursor.toArray();
      const totalNumPlanCurr = await planCurr.countDocuments(query);

      return {planCurrList, totalNumPlanCurr};
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      );
      return {planCurrList: [], totalNumPlanCurr: 0};
    }
  }
  static async getPlanCurrByID(id) {
    try {
      const pipeline = [
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
        {
          $lookup: {
            from: 'Unidade Curricular',
            let: {
              id: '$_id',
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$planCurr_id', '$$id'],
                  },
                },
              },
              {
                $sort: {
                  date: -1,
                },
              },
            ],
            as: 'Unidade Curricular',
          },
        },
        {
          $addFields: {
            UnidadeCurricular: '$Unidade Curricular',
          },
        },
      ];
      return await planCurr.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getPlanCurrByID: ${e}`);
      throw e;
    }
  }
}
