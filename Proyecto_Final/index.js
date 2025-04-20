const fs = require('fs');
const rutaArchivo = './Proyecto_Final/notas.json';

function leerNotas() {
    if (!fs.existsSync(rutaArchivo)) return [];
    const datos = fs.readFileSync(rutaArchivo, 'utf8');
    return datos.trim() ? JSON.parse(datos) : [];
}

function guardarNotas(notas) {
    fs.writeFileSync(rutaArchivo, JSON.stringify(notas, null, 2));
}

function agregarNota(titulo, contenido) {
    const notas = leerNotas();
    const notasSinDuplicados = notas.filter((nota) => nota.titulo !== titulo);
    const nuevaNota = { titulo, contenido };
    notasSinDuplicados.push(nuevaNota);

    guardarNotas(notasSinDuplicados);
    console.log('++ Nota agregada con éxito.');
}

function listarNotas() {
    const notas = leerNotas();

    if (notas.length === 0) {
        console.log('No hay notas guardadas.');
        return;
    }

    console.log('Lista de notas:');
    notas.forEach(({ titulo, contenido }, indice) => {
        console.log(`${indice + 1}. ${titulo}: ${contenido}`);
    });
}

function eliminarNota(titulo) {
    const notas = leerNotas();
    if (notas.length === 0) {
        console.log('No hay notas para eliminar.');
        return;
    }

    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);
    if (notasRestantes.length === notas.length) {
        console.log(`No se encontró una nota con el título "${titulo}".`);
        return;
    }

    guardarNotas(notasRestantes);
    console.log(`-- Nota de título "${titulo}" eliminada.`);
}


agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Trabajo', 'Terminar reporte semanal.');
agregarNota('Viaje', 'Comprar boletos de avión.');
agregarNota('Salud', 'Programar cita con el dentista.');
listarNotas();


eliminarNota('Trabajo');
listarNotas();