var form = document.getElementById('form');
var resultData = document.getElementById('resultData');
var jsonData = document.getElementById('json');
var fileBtn = document.getElementById('submitFile');
var downloadBtn = document.getElementById('download');


fileBtn.addEventListener('click', e => {
    var fileData = document.getElementById('file').files[0];
    if (fileData) {
        var reader = new FileReader();
        reader.readAsText(fileData, "UTF-8");
        reader.onload =  (evt) => {
            var data = evt.target.result;
            fetchData(data, (err, result) => {
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
        downloadData(result);
    });
});

var fetchData = (data, callback) => {
    fetch('http://localhost:1337/upload_json', {
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
        resultData.textContent = data.result;
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