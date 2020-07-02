var fs = require("fs");
var path = require("path");
function walkSync(dir, base_key) {
    var files = fs.readdirSync(dir);
    var filelist = [];
    files.forEach(function (file) {
        var statResult = fs.statSync(path.join(dir, file));
        if (statResult.isDirectory()) {
            var recPath = path.join(dir, file);
            var recKey = path.join(base_key, file);
            var recResult = walkSync(recPath, recKey);
            filelist = filelist.concat(recResult);
        }
        else {
            var key = path.join(base_key, file);
            var filePath = path.join(dir, file);
            var content = fs.readFileSync(filePath).toString();
            filelist.push({ key: key, content: content, timestamp: statResult.mtime.getTime() });
        }
    });
    return filelist;
}
function checkDirectory(p) {
    if (fs.existsSync(p) == false) {
        // console.error("Unabled to bundle runtime files.", p, "does not exist");
        throw ("Unable to bundle runtime files. " + p + " does not exist");
    }
    var statResult = fs.statSync(p);
    if (statResult.isDirectory() == false) {
        // console.error("Unable to bundle runtime files.", p, "is not a directory");
        throw ("Unable to bundle runtime files. " + p + " is not a directory");
    }
    return true;
}
var prewrittenBuiltinsDir = process.argv[2];
var outputFile = process.argv[3];
var prewrittenObject = [];
if (checkDirectory(prewrittenBuiltinsDir)) {
    prewrittenObject = walkSync(prewrittenBuiltinsDir, "./prewritten");
}
var filelist = prewrittenObject;
var output = JSON.stringify(filelist);
fs.writeFileSync(outputFile, output);
