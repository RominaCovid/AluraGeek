import {productoServices} from "../services/producto-servicio.js";

const obtenerInformacion =()=>{
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const imagen = document.querySelector("[data-imagen]");
  const name = document.querySelector("[data-name]");
  const precio = document.querySelector("[data-precio]");
  const desc = document.querySelector("[data-desc]");

  productoServices.buscarProducto(id)
     .then ((respuesta)=>{
        console.log(respuesta);
        imagen.src = respuesta.imagenUrl;
        name.textContent = respuesta.name;
        precio.textContent = respuesta.precio;        
        desc.textContent = respuesta.desc; 
      });
     
     
};
obtenerInformacion();






