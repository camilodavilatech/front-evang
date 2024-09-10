function mostrarDatos() {
    console.log("entra a mostrar datos");

    let request = sendRequest('productos', 'GET', '');
    let table = document.getElementById('productos-table');
    table.innerHTML = "";
    request.onload = function () {


        console.log("en mostrar datos request.onload sigue let data = request.response ");


        let data = request.response;
        console.log("en mostrar datos data ", data);


        data.forEach(element => {

            table.innerHTML += `
            <tr>
            <th>${element._id}</th>
            <td>${element.nombre}</td>
            <td>${element.valor}</td>
            <td>${element.vigente}</td>
            <td>${element.linea}</td>
            <td>
                <button type="button" class "btn btn-primary" onclick='window.location = "/form_productos.html?id=${element._id}"'>Editar</button>
                <button type="button" class = "btn btn-danger" onclick= 'deleteProductos("${element._id}")'>Eliminar</button>
            </td>
            </tr>
            `
        });
    }
    request.onerror = function () {
        table.innerHTML = `
    <tr>
    <td> colspan ="">Error al traer los datos</td>

    </tr>        
    `
    }
}

function deleteProductos(_id) {
    let request = sendRequest('productos/' + _id, 'DELETE', '');
    request.onload = function () {
        mostrarDatos();
    }
}

function guardarProductos() {
    let nom = document.getElementById("nombre-n").value
    let val = document.getElementById("valor-n").value
    let vig = document.getElementById("vigente-n").value
    let lin = document.getElementById("linea-n").value
    let data = { 'nombre': nom, 'valor': val, 'vigente': vig, 'linea': lin }
    let request = sendRequest('productos/', 'POST', data);

    request.onload = function () {

        window.location = 'productos.html'
    }

    request.onerror = function () {
        alert("Error al guardar los datos")
    }
}

function cargarDatos(id) {
    if (id != null) {
      alert("entra por cargar Datos");

        let request = sendRequest('productos/' + id, 'GET', '');

        let nom = document.getElementById("nombre-n")
        let val = document.getElementById("valor-n")
        let vig = document.getElementById("vigente-n")
        let lin = document.getElementById("linea-n")

alert("paso por carga");
        request.onload = function () {

            let data = request.response;
            nom.value = data.nombre
            val.value = data.valor
            vig.value = data.vigente
            lin.value = data.linea

            console.log('en cargar nombre '+ nom.value +  ' valor '+ val.value  + ' vigente ' +  vig.value +  ' linea '+ lin.value + " id: "+ id);

            console.log(data)
        }
    }
    request.onerror = function () {
        alert("Error al guardar los datos")
    }


}
function modificarProductos(id) {

    console.log("entra a modificarProductos")
    let nom = document.getElementById("nombre-n").value
    let val = document.getElementById("valor-n").value
    let vig = document.getElementById("vigente-n").value
    let lin = document.getElementById("linea-n").value
    let data = { 'nombre': nom, 'valor': val, 'vigente': vig, 'linea': lin}

console.log("modificar id" + id + "nom" + nom)
    console.log("en modificar productos ruta" + 'productos/' + id, 'PUT', data)
console.log("en modificar data  ="+ request)


let request = sendRequest('productos/' + id, 'PUT', data);
    console.log(request)
    request.onload = function () {
        window.location = 'productos.html'
    }

    request.onerror = function () {
        alert("Error al modificar los datos")
    }
}
