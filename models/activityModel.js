const db = require('./conn');

class ActivityModel {
    constructor(id, activity_name, activity_img) {
        this.id = id;
        this.activity_name = activity_name;
        this.activity_img = activity_img;
    }

    static async getAllActivities() {
        try {
            const query = `SELECT * FROM activity;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    async addActivity() {
        try {
            const query = `INSERT INTO activity (activity_name, activity_img) VALUES ('${this.activity_name}', '${this.activity_img}') RETURNING id;`
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = ActivityModel;