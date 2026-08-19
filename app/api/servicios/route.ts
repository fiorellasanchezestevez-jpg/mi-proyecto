import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("id", { ascending: true });

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