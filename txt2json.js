/**
 * Created by Sundar on 6/5/16.
 */
exports.txt2json = function(txtFileName,options){
    var fs=require('node-fs');
    var req_txtjson = [];
    var txt_value = fs.readFileSync(txtFileName).toString().split(options.delimiter);
    var txt_key =  txt_value.splice(0,options.rowCount);
    var old_txt = {};
    var pushFn=function(chunkValue){
        var old_txt = {};
        for (var j = 0; j < options.rowCount; j++) {
            old_txt[txt_key[j]] = chunkValue[j];
        }
        req_txtjson.push(old_txt);
    };
    while (txt_value.length > 0) {
        chunk = txt_value.splice(0,options.rowCount);
        pushFn(chunk);
    }
    if(req_txtjson.length>0){
        return req_txtjson;
    }
};
//var options={delimiter: '|',rowCount:4};
//console.log(txt2json('./example.txt',options));