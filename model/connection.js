const mongoose = require('mongoose');

const connectionString ='mongodb+srv://admin:4PkfOsjbZBrXZd69@user.d0eok.mongodb.net/Tickethack';

mongoose.connect(connectionString,{ connectTimeoutMS: 2000 })
    .then(() => console.log("Database Connected"))
    .catch(error => console.log(error));