var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://myronkip:<db_password>@cluster0.ontd3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://myronkip:<db_password>@cluster0.ontd3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://myronkip:<db_password>@cluster0.ontd3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
}
module.exports = config;
