import prisma from "@/src/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const profile = await prisma.profiles.findUnique({
    where: {
      id: id,
    },
  });

  if (!profile) {
    return Response.json(
      {
        message: "Profile Not Found!",
        data: null,
        status: 404,
      },
      {}
    );
  }

  return Response.json({
    message: "ok",
    data: profile,
    status: 200,
  });
  // const id = params.id;
}
