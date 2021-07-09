const db = require('./conn');
const bcrypt = require('bcryptjs');
const fetch = require('node-fetch')
const DateModel = require('./dateModel');
const { response } = require('express');

class Users {
    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword)
    }

    static async addUser(first_name, last_name, email, password) {
        console.log("ID?", this.id)
        try {
            const query = `INSERT INTO users (first_name, last_name, email, password) VALUES ('${first_name}', '${last_name}', '${email}', '${password}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    async login() {
        try {
            const query = `SELECT * FROM users WHERE email = '${this.email}';`;
            const response = await db.one(query);
            const isValid = this.checkPassword(response.password);
            if (!!isValid) {
                const { id, first_name, last_name } = response;
                return { isValid, user_id: id, first_name, last_name }
            } else {
                return { isValid }
            }
        } catch (error) {
            console.log('ERROR: ',error);
            return error;
        }
    }

    async getWeather() {
        try{
        const location = DateModel.location
        
        fetch(`api.openweathermap.org/data/2.5/weather?q=${location}&appid=a7e603ff18dff3f235eeab5d790b807d`)
        .then(response => response.json())
        .then(console.log(data))
        } catch (error) {
            console.log('ERROR: ',error)
            return error
        }
        return response.json
    }
}

module.exports = Users;