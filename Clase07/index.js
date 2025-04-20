function encontrarMaximo(arreglo) {
    if (arreglo.length === 1) {
        return arreglo[0];
    }

    const mitad = Math.floor(arreglo.length / 2);
    const izquierda = arreglo.slice(0, mitad);
    const derecha = arreglo.slice(mitad);

    const maxIzquierda = encontrarMaximo(izquierda);
    const maxDerecha   = encontrarMaximo(derecha);

    return Math.max(maxIzquierda, maxDerecha);
}

const numeros = [3, 8, 2, 10, 5, 7];
console.log(encontrarMaximo(numeros));