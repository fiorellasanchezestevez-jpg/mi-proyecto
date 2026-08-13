"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Servicio = {
  id: number;
  nombre: string;
  descripcion: string;
};

export default function Home() {
  const [servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    async function cargarServicios() {
      const respuesta = await fetch("/api/servicios");
      const datos = (await respuesta.json()) as Servicio[];

      setServicios(datos);
    }

    cargarServicios();
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-b from-[#e8faff] to-[#ccefff] px-6 pt-[70px] pb-[30px] text-[#17324d] max-[750px]:px-4 max-[750px]:pt-[50px] max-[750px]:pb-[25px]">
      <section className="mx-auto mb-[50px] w-full max-w-[900px] text-center">
        <p className="mb-3.5 text-[13px] font-extrabold tracking-[4px] text-[#3683a5]">
          UN ESPACIO DIGITAL
        </p>

        <h1 className="m-0 text-[clamp(42px,7vw,82px)] leading-none tracking-[-3px] max-[750px]:tracking-[-2px]">
          Bienvenido a Angel Lux
        </h1>

        <p className="mx-auto mt-6 max-w-[650px] text-[clamp(18px,2.5vw,25px)] leading-[1.6] text-[#416a7f]">
          No se que hago, pero me veo genial haciendolo.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[500px]">
        <article className="overflow-hidden rounded-[28px] border border-[rgba(91,177,210,0.3)] bg-white/80 shadow-[0_20px_50px_rgba(44,126,159,0.18)] backdrop-blur-[10px] transition duration-200 hover:-translate-y-[7px] hover:shadow-[0_28px_60px_rgba(44,126,159,0.25)]">
          <div className="relative aspect-[9/16] w-full bg-[#cdeef7]">
            <Image
              src="/orquideas.png.jpeg"
              alt="Orquideas celestes"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 750px) 90vw, 500px"
            />
          </div>

          <div className="p-6 text-center">
            <h2 className="mb-2 text-[25px] text-[#17324d]">Angel Lux</h2>
            <p className="m-0 text-base leading-[1.6] text-[#55798a]">
              Elegancia, luz y un poco de misterio.
            </p>
          </div>
        </article>
      </section>

      <section className="mx-auto mt-[60px] w-full max-w-[900px]">
        <div className="mb-[22px] text-center">
          <p className="mb-3.5 text-[13px] font-extrabold tracking-[4px] text-[#3683a5]">
            SERVICIOS
          </p>
          <h2 className="m-0 text-[clamp(30px,4vw,46px)] text-[#17324d]">
            Lo que puedes reservar
          </h2>
        </div>

        <div className="grid gap-4">
          {servicios.map((servicio) => (
            <article
              className="flex items-center justify-between gap-6 rounded-[18px] border border-[rgba(91,177,210,0.3)] bg-white/80 p-[22px] shadow-[0_14px_34px_rgba(44,126,159,0.12)] max-[750px]:flex-col max-[750px]:items-start max-[750px]:gap-3.5"
              key={servicio.id}
            >
              <div>
                <h3 className="mb-2 text-[21px] text-[#17324d]">
                  {servicio.nombre}
                </h3>
                <p className="m-0 text-base leading-[1.5] text-[#55798a]">
                  {servicio.descripcion}
                </p>
              </div>
              <Link
                className="shrink-0 rounded-full bg-[#25647f] px-4 py-[11px] text-[15px] font-bold text-white no-underline"
                href={`/servicios/${servicio.id}`}
              >
                Ver detalle
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-[50px] text-center text-[#598398]">
        <p>Creado con Next.js</p>
      </footer>
    </main>
  );
}
