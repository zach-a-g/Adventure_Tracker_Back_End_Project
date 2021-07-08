const db = require('./conn');

class DateModel {
    constructor(id, itinerary_id, day, location, event, detail) {
        this.id = id;
        this.itinerary_id = itinerary_id;
        this.day = day;
        this.location = location;
        this.event = event;
        this.detail = detail;
    }

    static async getDatesById(itinerary_id) {
        try {
            const query = `SELECT * FROM date WHERE itinerary_id = ${itinerary_id};`;
            const response = db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    async addDate() {
        try {
            const query = `INSERT INTO date (itinerary_id, date, location, event, detail) VALUES ('${this.itinerary_id}', '${this.day}', '${this.location}', '${this.event}', '${this.detail}') RETURNING id;`;
            const response = await db.one(query);
            return response;

        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async updateDate(itinerary_id) {
        try {
            const query = `UPDATE date SET day = '${this.day}', location ='${this.location}', event = '${this.event}', detail = '${this.detail}' WHERE itinerary_id = ${itinerary_id};`;
            const response = await db.result(query);
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}