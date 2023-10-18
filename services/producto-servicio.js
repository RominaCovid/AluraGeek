//lista de procuto
const listaProductos = () =>{
    return fetch("https://mi-repositorio-eight.vercel.app/producto")
    .then (respuesta => respuesta.json())
    .catch(error=>console.log("error"))
};

//escribe en el archivo db.json
const crearProducto = (imagenUrl,cat,name,precio,desc)=>{
    return fetch("https://mi-repositorio-eight.vercel.app/producto",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({imagenUrl,cat,name,precio,desc})
        
    })
    .then (respuesta=>{
        if(respuesta.ok){
            return respuesta.body
            console.log(respuesta.body)
        }
        throw new Error ("No se pudo crear producto")
    });
    
};
//Para eliminar un Producto
const eliminarProducto = (id) => {
    return fetch(`https://mi-repositorio-eight.vercel.app/producto/${id}`,{ method:"DELETE"}); 
};

//Para buscar un Producto
const buscarProducto = (id)=>{
      return fetch(`https://mi-repositorio-eight.vercel.app/producto/${id}`)
         .then((respuesta)=> respuesta.json());
}; 

const editarProducto = (id)=>{
    return fetch (`https://mi-repositorio-eight.vercel.app/producto/${id}`)
      .then((respuesta) => respuesta.json());
};

const actualizarProducto = (imagenUrl,cat,name,precio,desc,id)=>{
    return fetch (`https://mi-repositorio-eight.vercel.app/producto/${id}`,{
        method:"PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imagenUrl,cat,name,precio,desc})
    });
};

const validarUsuario =()=>{
    return fetch ("https://mi-repositorio-eight.vercel.app/usuario")
     .then ((respuesta)=> respuesta.json());
};

const productosPromocion = ()=>{
    return fetch ("https://mi-repositorio-eight.vercel.app/promocion")
    .then ((respuesta)=> respuesta.json());

};


export const productoServices={
    listaProductos,
    crearProducto,
    eliminarProducto,
    buscarProducto,
    editarProducto,
    actualizarProducto,
    validarUsuario,
    productosPromocion,
       
};