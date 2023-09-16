import { productoServices } from "../services/producto-servicio.js";

const nuevoProducto = (imagenUrl,name,precio,id) => {
    const card = document.createElement("div");
    const contenido = ` 
                        <div class="card_producto_mostrado"> 
                        <div class="edit_eliminar">
                        <a href="../screems/form-editar-producto.html?id=${id}"><img  width="12px" height="12px" src="../img/edit.svg" alt="editar"></a>
                        <a id="${id}" data-eliminar><img  width="12px" height="12px" src="../img/eliminate.png" alt="editar"></a>
                        </div>                                                                    
                        <img src="${imagenUrl}" alt="imagen">
                        <h5 class="card_font">${name}</h5>
                        <p class="card_font">${precio}</p>                              
                        </div>    
                       `;
    card.innerHTML = contenido;
    const eliminar = card.querySelector("[data-eliminar]");
    
    eliminar.addEventListener("click", () =>{
      const id = eliminar.id;
      productoServices.eliminarProducto(id);
    });    
    return card;                  
};

const productos = document.querySelector("[data-producto]")
const render = async () =>{
                         try{
                            const listaProductos = await productoServices.listaProductos();
                            listaProductos.forEach(e => {
                               productos.appendChild(nuevoProducto(e.imagenUrl,e.name,e.precio,e.id));
                              
                             }                                                     
                                                                
                            );
                          }catch (error){console.log(error);}
                              
};
render();
