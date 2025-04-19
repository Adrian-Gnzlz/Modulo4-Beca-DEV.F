const regalos = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function buscarRegalo(regalos, nombreRegalo, indice = 0) {
    if (indice === regalos.length) {
        return `${nombreRegalo} no está en la lista.`;
    }

    if (regalos[indice] === nombreRegalo) {
        return `${nombreRegalo} está en la posición ${indice}.`;
    }

    return buscarRegalo(regalos, nombreRegalo, indice + 1);
}

let regaloBuscado = "Lego";
console.log(buscarRegalo(regalos, regaloBuscado));

regaloBuscado = "Camión";
console.log(buscarRegalo(regalos, regaloBuscado));