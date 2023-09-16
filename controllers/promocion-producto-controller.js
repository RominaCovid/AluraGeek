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

const verProdPromocion = ()=>{
     productoServices.productosPromocion()
       .then ((data)=>{
        data.forEach(e => {
            seccionProductos.appendChild(nuevoProducto(e.imagenUrl,e.name,e.precio,e.id));           
        });
          
       });
};
verProdPromocion();