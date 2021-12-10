/***********************
      VARIABLES
 **********************/


let contenedorPedidos =document.querySelector("#tablaPedidos");
let contenedorCarrito =document.querySelector("#modalBody");

/***********************
      FUNCIONES
 **********************/
// funcion que muestra los pedidos a prepar

function mostrarPedido(array) {
    contenedorPedidos.innerHTML = "";
    for (e of array) {
      contenedorPedidos.innerHTML += `
            <tr class="item">
                <th scope="row">${e.idPedido}</th>
                <td>${e.fecha}</td>
                <td>${e.cliente}</td>
                <td>${e.vendedora}</td>
                <td><button class="btn btn-danger " onclick="armarPedido(${e.idPedido})">Armar</button></td>
                <td><button class="btn btn-danger " onclick="eliminarPedido(${e.idPedido})">X</button></td>
            </tr>`;
    }
}

function armarPedido(idPedido) {
    contenedorCarrito.innerHTML = "";
    for (e of array) {
      contenedorCarrito.innerHTML += `
            <tr class="item">
                <th scope="row">${e.idCarro}</th>
                <td>${e.codigo}</td>
                <td>${e.cantidad}</td>
                <td>$${e.precio}</td>
               
                <td><button class="btn btn-danger " onclick="quitar(${e.idCarro})">X</button></td>
            </tr>`;
    }
    contenedorCarrito.innerHTML += `
            <tr>
                <td class="text-center" colspan="3" >Total</td>
                <td colspan="2">$<span id="totalCarrito">0</span></td>
                
                
            </tr>
            <tr>
            <td class="text-center" colspan="4" ><button class="btn btn-primary agrega" onclick="terminarCompra()">Terminar Compra</button></td>
            
        </tr>
    `;
  }

/***********************
      EVENTOS
 **********************/

mostrarPedido(JSON.parse(localStorage.getItem("pedido")));