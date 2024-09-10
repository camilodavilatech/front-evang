//  conectar front backend


//conectando api local
const url = 'http://localhost:5000/api/'

// conectando api render de la nube:
//const url = 'https://backend142-1-qryv.onrender.com/api/'

function sendRequest(endPoint, method, data){
    let request = new XMLHttpRequest();
    request.open(method, url+endPoint);
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(data? JSON.stringify(data): data);

    // console.log("en request ruta: url + endPoint: ", url+endPoint)
    // console.log(" en request data:", request    )
    return request
}