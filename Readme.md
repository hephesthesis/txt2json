txt2json
========


utility to convert txt file to a json array with the given delimiter.

Installation
------------

    npm install txt2json

Usage
------

Use to generate file:

    var json2txt = require('txt2json');

    var filePath='user/local/files/example.txt'

    var options = {
        delimiter: '|',
        rowCount: 4
    }

json2txt.txt2json(filePath,options);
