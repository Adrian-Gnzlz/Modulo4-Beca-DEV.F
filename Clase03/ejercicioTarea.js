//id, nombre, categoria, precio, envio, oferta, stock, vendidos
const productos = [
    { id: 11234, nombre: "Laptop", categoria: "tecnologia", precio: 15000, envio: "gratis", oferta: true, stock: 5, vendidos: 12 },
    { id: 25167, nombre: "Mouse", categoria: "tecnologia", precio: 300, envio: "pago", oferta: false, stock: 10, vendidos: 50 },
    { id: 73453, nombre: "Camisa", categoria: "ropa", precio: 500, envio: "gratis", oferta: false, stock: 0, vendidos: 20 },
    { id: 48656, nombre: "Zapatos", categoria: "ropa", precio: 1200, envio: "gratis", oferta: true, stock: 3, vendidos: 8 }
];

// Verificar si hay productos en oferta
const hayOfertas = productos.some(p => p.oferta === true);
console.log("¿Hay productos en oferta?:", hayOfertas);

// Encontrar el primer producto sin stock
const sinStock = productos.find(p => p.stock === 0);
console.log("Primer producto sin stock:", sinStock);

// Verficar cuales productos tienen envio gratis
const envioGratis = productos.filter(p => p.envio === "gratis");
console.log("Productos con envío gratis:", envioGratis);

// Calcular el valor total de tu inventario
const valorInventario = productos.reduce((total, p) => total + (p.precio * p.stock), 0);
console.log("Valor total del inventario:", valorInventario);

// Calcular el numero total de productos vendidos
const totalVendidos = productos.reduce((total, p) => total + p.vendidos, 0);
console.log("Total de productos vendidos:", totalVendidos);

// Obtener todos los producto de una categoria
const categoriaBuscada = "tecnologia";
const productosCategoria = productos.filter(p => p.categoria === categoriaBuscada);
console.log(`Productos en la categoría "${categoriaBuscada}":`, productosCategoria);
