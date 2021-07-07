const db = require('./conn');

class LocationModel {
    constructor(id, location_name, location_img, location_description) {
        this.id = id;
        this.location_name = location_name;
        this.location_img = location_img;
        this.location_description = location_description;
    }

    async addLocation() {
        try {
            const query = `INSERT INTO location (location_name, location_img, location_description) VALUES ('${this.location_name}', '${this.location_img}', '${this.location_description}')`
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}