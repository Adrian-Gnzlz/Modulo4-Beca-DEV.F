const listaDeCompras = [];

/**
 * Agregar nuevo producto.
 */
const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`El producto "${producto}" se agregó correctamente a la lista.`);
    } else {
    console.log(`El producto "${producto}" ya se encuentra en la lista. No se agregó.`);
    }
};

/**
 * Eliminar producto.
 */
const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);

    if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(`El producto "${producto}" fue eliminado de la lista.`);
    } else {
    console.log(`El producto "${producto}" no se encuentra en la lista.`);
    }
};

/**
 * Mostrar lista completa.
 */
const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
    } else {
    console.log("Lista de Compras actual:");
    listaDeCompras.forEach((producto, indice) => {
        console.log(`${indice + 1}. ${producto}`);
    });
    }
};


agregarProducto("Leche");
agregarProducto("Manzanas");
agregarProducto("Manzanas");
agregarProducto("Huevos");

mostrarLista();

eliminarProducto("Manzanas");
eliminarProducto("Zanahoria");

mostrarLista();
