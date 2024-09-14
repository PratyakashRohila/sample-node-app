let path = require("path");
let fixture = path.join(__dirname, "../.env");
let dotenv = require('dotenv').config({ path: fixture })
let config = dotenv.parsed
const production=require('./dbConfig')
let auth= production.production;

module.exports = {
    WHITELIST_URLS: process.env.WHITELIST_URLS ? process.env.WHITELIST_URLS : config?.WHITELIST_URLS,
    APPLICATION_PORT: process.env.APPLICATION_PORT ? process.env.APPLICATION_PORT : config?.APPLICATION_PORT,
    APPLICATION_HOST: process.env.APPLICATION_HOST ? process.env.APPLICATION_HOST : config?.APPLICATION_HOST,
    NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : config?.NODE_ENV,
    production:auth
};

