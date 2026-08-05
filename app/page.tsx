import Image from "next/image";

export default function Home() {
  return (
    <main className="pagina">
      <section className="presentacion">
        <p className="etiqueta">UN ESPACIO DIGITAL</p>

        <h1>Bienvenido a Ángel Lux</h1>

        <p className="subtitulo">
          No sé qué hago, pero me veo genial haciéndolo.
        </p>
      </section>

      <section className="galeria">
        <article className="tarjeta">
          <div className="contenedorImagen">
            <Image
              src="/orquideas.png.jpeg"
              alt="Orquídeas celestes"
              fill
              priority
              className="imagen"
              sizes="(max-width: 750px) 90vw, 500px"
            />
          </div>

          <div className="contenidoTarjeta">
            <h2>Ángel Lux</h2>
            <p>Elegancia, luz y un poco de misterio.</p>
          </div>
        </article>
      </section>

      <footer>
        <p>Creado con Next.js ✦</p>
      </footer>
    </main>
  );
}