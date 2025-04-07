// Generador de tarjetas de presentacion

const contactos = [
    {nombre:"Juan Perez",
        puesto:"Desarrollador",
        empresa:"Empresa ABC",
        correoElectronico:"juan@ejemplo.com",
        telefono:"555-123-4567"},
    {nombre:"Maria Lopez",
        puesto:"Disenadora",
        empresa:"Empresa XYZ",
        correoElectronico:"maria@ejemplo.com",
        telefono:"555-987-6543"},
    {nombre:"Adrian Gonzalez",
        puesto:"Estudiante",
        empresa:"Empresa ASDF",
        correoElectronico:"adrian@ejemplo.com",
        telefono:"555-456-1234"}
]


const generarTarjeta = (contacto) => {
    return `--------------------------------
            Nombre: ${contacto.nombre}
            Puesto: ${contacto.puesto}
            Empresa: ${contacto.empresa}
            Correo: ${contacto.correoElectronico}
            Telefono: ${contacto.telefono}
            --------------------------------`;
};

contactos.forEach(contacto => console.log(generarTarjeta(contacto)));