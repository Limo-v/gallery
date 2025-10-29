require('dotenv').config({ quiet: true, inject: {} });

var config = {};

const { MONGO_USERNAME: username, MONGO_PASSWORD: password, MONGO_CLUSTER: cluster, APP_VALUE: app_value,MONGO_DB: prod, MONGO_DB_DEV: dev, MONGO_DB_TEST:test} = process.env;

config.mongoURI = {
    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;