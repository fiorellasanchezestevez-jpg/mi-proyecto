export type Servicio = {
  id: number;
  nombre: string;
  descripcion: string;
  detalle: string;
  precio: string;
};

export const servicios: Servicio[] = [
  {
    id: 1,
    nombre: "Soft gel",
    descripcion: "Extension de uñas.",
    detalle:
      "Ideal si quieres uñas mas largas, prolijas y resistentes. Se trabaja con tips soft gel y acabado personalizado segun tu estilo.",
    precio: "$18.000",
  },
  {
    id: 2,
    nombre: "Kapping / Reforzado",
    descripcion: "Bano protector y fortalecedor sobre una natural.",
    detalle:
      "Perfecto para proteger la una natural y darle mas firmeza sin agregar largo. Ayuda a que el esmaltado dure mejor.",
    precio: "$13.000",
  },
  {
    id: 3,
    nombre: "Semipermanente",
    descripcion: "Esmaltado semipermanente.",
    detalle:
      "Esmaltado de larga duracion con terminacion brillante. Incluye preparacion de la una y aplicacion del color elegido.",
    precio: "$10.000",
  },
  {
    id: 4,
    nombre: "Limpieza profunda facial",
    descripcion: "Incluye extracciones, hidratacion y consultoria.",
    detalle:
      "Tratamiento para limpiar profundamente la piel, retirar impurezas, hidratar y revisar que rutina conviene segun tu caso.",
    precio: "$18.000",
  },
  {
    id: 5,
    nombre: "Lifting facial",
    descripcion: "Tratamiento facial con radiofrecuencia.",
    detalle:
      "Sesion enfocada en mejorar la apariencia de firmeza del rostro usando radiofrecuencia y maniobras faciales.",
    precio: "$15.000",
  },
];
