const fs = require('fs');
const path = require('path');


exports.getIndex = function(req, res, next) {
  let word = req.query.word;
  let meaning = '';
  let description = '';
  let example = '';

  let piauiesFile = fs.readFileSync(path.join(__dirname, '../db/piauies.json'), 'utf8');
  let piauiesJson = JSON.parse(piauiesFile);
  let girias = piauiesJson["slang"];

  if (word != undefined) {
    word = word.toLowerCase();

    girias.forEach(giria => {
      if (giria["name"] === word) {
        meaning = giria["meaning"];
        description = giria["description"];
        example = giria["example"];
      }
    });
  }

  res.render('index', {meaning: meaning, description: description, example: example});
}

