import prisma from "@/src/lib/prisma";

export async function POST(req: Request) {}
export async function GET(req: Request) {
  const results = await prisma.user.findMany();
  return Response.json({
    message: "ok",
    status: 200,
    data: results,
  });
}
