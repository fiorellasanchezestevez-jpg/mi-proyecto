import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("Servicios")
    .select("*");

  if (error) {
    return Response.json(
      {
        mensaje: "No se pudieron cargar los servicios",
        error: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      },
      { status: 500 },
    );
  }

  const servicios = data.map((item) => ({
    id: item.id,
    nombre: item.servicio,
    descripcion: item.descripcion,
    detalle: item.descripcion,
    precio: `$${item.precio}`,
    duracion: item["duracion en minutos"],
  }));

  return Response.json(servicios);
}