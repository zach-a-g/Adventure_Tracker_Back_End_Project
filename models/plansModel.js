const db = require('./conn');

class PlansModel {
    constructor(id, content, user_id) {
        this.id = id;
        this.content = content;
        this.user_id = user_id;
    }

    static async getAll(user_id) {
        try {
            const query = `SELECT * FROM plans WHERE user_id = ${user_id}`
            response = await db.one(query);
            return response;
        } catch (error) {
        console.log('ERROR: ', error);
        return error
        }
    }
}