import { productoServices } from "../services/producto-servicio.js";

const nuevoProducto = (imagenUrl,name,precio,desc,id) => {
    const card = document.createElement("div");
    const contenido = `
                        <div class="card_producto">
                        <img src="${imagenUrl}" alt="imagen">
                        <h5 class="card_font">${name}</h5>
                        <p class="card_font">${precio}</p>
                        <p class="card_font">${desc}</p>
                        <a class="card_ver_producto" href="../screems/productos.html?id=${id}">Ver Producto</a> 
                        </div>    
                       `;
    card.innerHTML = contenido;      
    return card;                  
};

const productos = document.querySelector("[data-palo-santo]");
const render = async () =>{
                          try{
                            const listaProductos = await productoServices.listaProductos();
                            listaProductos.forEach(e => {
                                productos.appendChild(
                                  nuevoProducto(e.imagenUrl,e.name,e.precio,e.desc,e.id));
                                  console.log(e.imagenUrl);
                                                                 
                            });
                          }catch (error){console.log(error);
                            }  
};
render();