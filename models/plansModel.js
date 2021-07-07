const db = require('./conn');

class PlansModel {
    constructor(id, content, user_id) {
        this.id = id;
        this.content = content;
        this.user_id = user_id;
    }

    static async getAllById(user_id) {
        try {
            const query = `SELECT * FROM plans INNER JOIN location on location_id = location.id INNER JOIN activity on activity_id = activity.id WHERE user_id = ${user_id};`
            response = await db.one(query);
            return response;
        } catch (error) {
        console.log('ERROR: ', error);
        return error
        }
    }

    static async getAll() {
        try {
            const query = `SELECT * FROM plans;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = PlansModel;