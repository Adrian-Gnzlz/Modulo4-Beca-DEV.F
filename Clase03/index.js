const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    ];

    /**
    * filter()
    */
    const productosBaratos = productos.filter(producto => producto.precio < 100);
    console.log("Productos que cuestan menos de $100:", productosBaratos);

    /**
    * sort
    */
    const productosOrdenados = [...productos].sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
    });
    console.log("Productos ordenados alfabéticamente:", productosOrdenados);

    /**
    * map
    */
    const nombresProductos = productos.map(producto => producto.nombre);
    console.log("Nombres de los productos filtrados y ordenados:", nombresProductos);

    /**
    * (Opcional) includes
    */
    const productoBuscado = "Camiseta";
    const existe = nombresProductos.includes(productoBuscado);

    console.log(`¿La lista final incluye "${productoBuscado}"?`, existe);