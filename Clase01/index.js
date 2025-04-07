import { registrarDestino, mostrarItinerario } from "./viajes.js";

/**
 * Función principal que inicia la aplicación de planificación de viajes,
 * registra algunos destinos de ejemplo y muestra el itinerario resultante.
 */
const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión", 2);
    registrarDestino("Londres", "2024-07-01", "Tren", 5);
    registrarDestino("New York", "2024-08-20", "Avión", 1);

  // Muestra todo el itinerario en consola
    mostrarItinerario();
};

// Inicia la aplicación
iniciarApp();
