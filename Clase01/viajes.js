// Arreglo de destinos (se declara como const ya que no reasignaremos el array en sí)
const destinos = [];

/**
 * Calcula el costo del viaje en base al destino, el transporte y el número de personas.
 * Si hay más de 3 personas, aplica un 10% de descuento al costo final.
 */
const calcularCosto = (destino, transporte, numeroPersonas = 1) => {
    let costoBase = 0;

    switch (destino) {
    case "Paris":
        costoBase = 500;
        break;
    case "Londres":
        costoBase = 400;
        break;
    case "New York":
        costoBase = 600;
        break;
    default:
        costoBase = 300;
        break;
    }

    if (transporte === "Avión") {
    costoBase += 200;
    } else if (transporte === "Tren") {
    costoBase += 100;
    }

  let costoTotal = costoBase * numeroPersonas;

    if (numeroPersonas > 3) {
    costoTotal = costoTotal * 0.9;
    }

    return costoTotal;
};

/**
 * Registra un destino, fecha y tipo de transporte en el arreglo de destinos,
 * calculando el costo con la función calcularCosto.
 */
const registrarDestino = (destino, fecha, transporte, numeroPersonas = 1) => {
    const nuevoViaje = {
    destino,
    fecha,
    transporte,
    personas: numeroPersonas,
    costo: calcularCosto(destino, transporte, numeroPersonas),
    };
    destinos.push(nuevoViaje);
};

const mostrarItinerario = () => {
    destinos.forEach((viaje, indice) => {
    console.log(`===== Viaje #${indice + 1} =====`);
    console.log(`Destino: ${viaje.destino}`);
    console.log(`Fecha: ${viaje.fecha}`);
    console.log(`Transporte: ${viaje.transporte}`);
    console.log(`Personas: ${viaje.personas}`);
    console.log(`Costo Total: $${viaje.costo}`);
    console.log(`=====================\n`);
    });
};

export { registrarDestino, mostrarItinerario };
