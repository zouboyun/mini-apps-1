var form = document.getElementById('form');
var jsonData = document.getElementById('json');
var resultData = document.getElementById('resultData');

form.addEventListener('submit', e => {
    var data = jsonData.value;
    e.preventDefault();
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
    });
});