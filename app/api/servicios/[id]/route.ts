import { servicios } from "@/app/data/servicios";

export async function GET(_request: Request, context: RouteContext<"/api/servicios/[id]">) {
  const { id } = await context.params;
  const servicio = servicios.find((item) => item.id === Number(id));

  if (!servicio) {
    return Response.json(
      { mensaje: "Servicio no encontrado" },
      { status: 404 },
    );
  }

  return Response.json(servicio);
}
