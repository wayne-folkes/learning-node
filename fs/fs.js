const fs = require('fs');

path = __dirname+'/geo.json'
fs.readFile(path, function (error, data) {
    content = JSON.parse(data)
    console.log(content['org'])
})
console.log('Done')