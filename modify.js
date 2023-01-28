module.exports.modify = modifyString;

function modifyString(str) {
    if(str.length > 100) {
        return str.substring(0, 100)+"..."
    }
    else {
        return str;
    }
}