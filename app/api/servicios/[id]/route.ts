import { supabase } from "@/lib/supabase";

export async function GET(
  _request: Request,
  context: RouteContext<"/api/servicios/[id]">,
) {
  const { id } = await context.params;

  const { data, error } = await supabase
    .from("Servicios")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return Response.json(
      { mensaje: "Servicio no encontrado" },
      { status: 404 },
    );
  }

  const servicio = {
    id: data.id,
    nombre: data.servicio,
    descripcion: data.descripcion,
    detalle: data.descripcion,
    precio: `$${data.precio}`,
    duracion: data["duracion en minutos"],
  };

  return Response.json(servicio);
}