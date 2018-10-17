var form = document.getElementById('form');
var resultData = document.getElementById('resultData');
var jsonData = document.getElementById('json');
var fileBtn = document.getElementById('submitFile');
var downloadBtn = document.getElementById('download');
var rowId = document.getElementById('identifier');

fileBtn.addEventListener('click', e => {
    var fileData = document.getElementById('file').files[0];
    if (fileData) {
        var reader = new FileReader();
        reader.readAsText(fileData, "UTF-8");
        reader.onload =  (evt) => {
            var data = evt.target.result;
            fetchData(data, (err, result) => {
                resultData.textContent = result;
                downloadData(result);
            });
        }
        reader.onerror =  (evt) => {
            console.log('error');
        }
    }
});

form.addEventListener('submit', e => {
    var data = jsonData.value;
    e.preventDefault();
    fetchData(data, (err, result) => {
        resultData.textContent = result;
        downloadData(result);
    });
});

var fetchData = (data, callback) => {
    fetch('/upload_json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: data})
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        if (rowId.checked) {
            var arr = data.result.split('\r\n');
            arr[0] = 'rowId,' + arr[0];
            for (var i = 1; i < arr.length; i++) {
                arr[i] = String(i) + ',' + arr[i];
            }
            data.result = arr.join('\r\n');
        }
        callback(null, data.result);
    });
};

var downloadData = result => {
    downloadBtn.addEventListener('click', e => {
        e.target.href = 'data:text/csv;charset=utf-8,' + encodeURI(result);
        e.target.target = '_blank';
        e.target.download = 'data.csv';
    });
};