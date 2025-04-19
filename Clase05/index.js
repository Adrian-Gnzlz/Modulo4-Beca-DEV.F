const encontrarLarga = (texto) => {

    const palabras = texto.split(' ');

    let longestWord = '';

    for (let derecha = 0; derecha < palabras.length; derecha++) {
        const actual = palabras[derecha];
        if (actual.length > longestWord.length) {
        longestWord = actual;
        }
    }

    return longestWord;
};


const texto = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(encontrarLarga(texto));   // "programación"