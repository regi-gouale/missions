import prisma from "@/src/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const missionary = await prisma.missionaries.findUnique({
    where: {
      id: id,
    },
  });

  if (!missionary) {
    return Response.json(
      {
        message: "Missionary Not Found!",
        data: null,
        status: 404,
      },
      {}
    );
  }

  return Response.json({
    message: "ok",
    data: missionary,
    status: 200,
  });
  // const id = params.id;
}