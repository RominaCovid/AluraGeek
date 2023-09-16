import { productoServices } from "../services/producto-servicio.js";

const nuevoProducto = (imagenUrl,name,precio,id) => {
    const card = document.createElement("div");
    const contenido = `
                        <div class="card_producto">                        
                        <img src="${imagenUrl}" alt="imagen">
                        <h5 class="card_font">${name}</h5>
                        <p class="card_font">${precio}</p>              
                        <a class="card_ver_producto" href="../screems/mostrar-producto.html?id=${id}" id="${id}">Ver Producto</a> 
                        </div>    
                       `;
    card.innerHTML = contenido;    
    return card;                  
};
const seccionProductos = document.querySelector("[data-categoria]");
const url = new URL(window.location);
const cat = url.searchParams.get("cat");

if (cat == "sahumerio"){
    const productosSahumerio = () =>{
        return fetch("http://localhost:3000/producto?cat=sahumerio")
          .then(respuesta=> respuesta.json())
          .catch (error=>console.log("error"));
        
       };
       productosSahumerio()
        .then ((data)=>{
            data.forEach((element) => {
               seccionProductos.appendChild(nuevoProducto(element.imagenUrl,element.name,element.precio,element.id));
             
            });
        });
}

if (cat == "bombitas"){
    const productosSahumerio = () =>{
        return fetch("http://localhost:3000/producto?cat=bombitas")
          .then(respuesta=> respuesta.json())
          .catch (error=>console.log("error"));
        
       };
       productosSahumerio()
        .then ((data)=>{
            data.forEach((element) => {
               seccionProductos.appendChild(nuevoProducto(element.imagenUrl,element.name,element.precio,element.id));
             
            });
        });
}

if (cat == "diverso"){
    const productosSahumerio = () =>{
        return fetch("http://localhost:3000/producto?cat=diverso")
          .then(respuesta=> respuesta.json())
          .catch (error=>console.log("error"));
        
       };
       productosSahumerio()
        .then ((data)=>{
            data.forEach((element) => {
               seccionProductos.appendChild(nuevoProducto(element.imagenUrl,element.name,element.precio,element.id));
             
            });
        });
}
        




   

