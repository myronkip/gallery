var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://myronkip:<Nointernet.1@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://myronkip:Nointernet.1@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://myronkip:Nointernet.1@cluster0.ontd3.mongodb.net/',
}
module.exports = config;
