import { servicios } from "@/app/data/servicios";

export async function GET() {
  return Response.json(servicios);
}
