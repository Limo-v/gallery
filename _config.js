var config = {}

config.mongoURI = {
    production: 'mongodb+srv://kiplimo:kiplimo@cluster1.hcebpbn.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster1',
    development: 'mongodb+srv://kiplimo:kiplimo@cluster1.hcebpbn.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster1',
    test: 'mongodb+srv://kiplimo:kiplimo@cluster1.hcebpbn.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster1',
}

module.exports = config;
