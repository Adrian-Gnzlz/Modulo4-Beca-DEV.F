const invitados = [
    "Ana",
    "Antonio",
    "Carlos",
    "Cristina",
    "Luis",
    "Lucia",
    "Maria",
    "Omar",
    "Ximena"
    ];

    const encontrarParejaPorInicial = (lista) => {
    let i = 0;
    let j = 1;

    while (j < lista.length) {
        const inicialI = lista[i][0].toLowerCase();
        const inicialJ = lista[j][0].toLowerCase();

        if (inicialI === inicialJ) {
        return [lista[i], lista[j]];
        } else {
        i++;
        j++;
        }
    }

    return null;
    };

    const resultado = encontrarParejaPorInicial(invitados);
    if (resultado) {
    console.log(resultado.join(" y "));
    } else {
    console.log("No se encontró ningún par de invitados con la misma inicial.");
    }