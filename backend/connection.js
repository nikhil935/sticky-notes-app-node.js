const mongoose = require('mongoose');

async function connectTodb(url) {
    return mongoose.connect(url)
}

module.exports = {connectTodb};