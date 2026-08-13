"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type Servicio = {
  id: number;
  nombre: string;
  descripcion: string;
  detalle: string;
  precio: string;
};

export default function ServicioDetallePage() {
  const params = useParams<{ id: string }>();
  const [servicio, setServicio] = useState<Servicio | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarServicio() {
      const respuesta = await fetch(`/api/servicios/${params.id}`);

      if (!respuesta.ok) {
        setCargando(false);
        return;
      }

      const datos = (await respuesta.json()) as Servicio;

      setServicio(datos);
      setCargando(false);
    }

    cargarServicio();
  }, [params.id]);

  if (cargando) {
    return (
      <main className="pagina paginaDetalle">
        <section className="detalleServicio">
          <p className="etiqueta">SERVICIO</p>
          <h1>Cargando servicio...</h1>
        </section>
      </main>
    );
  }

  if (!servicio) {
    return (
      <main className="pagina paginaDetalle">
        <section className="detalleServicio">
          <p className="etiqueta">SERVICIO</p>
          <h1>Servicio no encontrado</h1>
          <Link className="volver" href="/">
            Volver a servicios
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="pagina paginaDetalle">
      <section className="detalleServicio">
        <p className="etiqueta">SERVICIO</p>
        <h1>{servicio.nombre}</h1>
        <p className="subtitulo">{servicio.descripcion}</p>

        <div className="panelDetalle">
          <div>
            <h2>Detalle</h2>
            <p>{servicio.detalle}</p>
          </div>

          <div className="precioDetalle">
            <span>Precio</span>
            <strong>{servicio.precio}</strong>
          </div>
        </div>

        <Link className="volver" href="/">
          Volver a servicios
        </Link>
      </section>
    </main>
  );
}
