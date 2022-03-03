const fs = require('fs/promises');

function getTalker() {
    return fs.readFile('./talker.json', 'utf8')
    .then((content) => JSON.parse(content));
}

function setTalker(newTalker) {
    return fs.writeFile('./talker.json', JSON.stringify(newTalker));
}

module.exports = { getTalker, setTalker };