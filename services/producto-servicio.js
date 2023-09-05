const listaProductos = () =>{
    return fetch("http://localhost:3000/producto")
    .then (respuesta => respuesta.json())
    .catch(error=>console.log("error"))
};
const crearProducto = (name,imagenUrl,precio)=>{
    return fetch("http://localhost:3000/producto",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({name,imagenUrl,precio,})
    })
    .then (respuesta=>{
        if(respuesta.ok){
            return respuesta.body
        }
        throw new Error ("No se pudo crear producto")
    });
    
};

export const productoServices={
    listaProductos,
    crearProducto
};