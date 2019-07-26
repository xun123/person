const path = require('path');

module.exports = {
    entry:{
        entry:'./src/js/index.js'
    },
    output:{
        path:path.jion(__dirname,'./dist'),
        filename:'bundle.js'
    },
    mode: 'production'
}