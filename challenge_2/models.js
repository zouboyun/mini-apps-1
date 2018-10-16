var CSVGenerator = (obj) => {
    var keys = [];
    var values = [];
    var collectKeys = (obj) => {
        var value = [];
        for (var key in obj) {
            if (key !== 'children') {
                if (!keys.includes(key)) {
                    keys.push(key);
                }
                value.push(obj[key]);
            } else if (key === 'children') {
                values.push(value);
                obj[key].forEach(child => {
                    collectKeys(child);
                });
            }
        }
    }
    collectKeys(obj);
    var result = keys.join(',');
    values.map(arr => arr.join(','));
    result += '\r\n' + values.join('\r\n');
    return result;
};

module.exports = CSVGenerator;