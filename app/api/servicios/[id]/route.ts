import { supabase } from "@/lib/supabase";

export async function GET(
  _request: Request,
  context: RouteContext<"/api/servicios/[id]">,
) {
  const { id } = await context.params;

  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !data) {
    return Response.json(
      { mensaje: "Servicio no encontrado" },
      { status: 404 },
    );
  }

  return Response.json(data);
}