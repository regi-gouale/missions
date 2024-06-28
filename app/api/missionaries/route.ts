import prisma from "@/src/lib/prisma";

export async function POST(req: Request) {
  // get request body
  const { content } = await req.json();
  // check if content exists in database
  const missionary = await prisma.missionaries.findUnique({
    where: {
      email: content.email,
    },
  });
  // if not, create a new missionary
  if (!missionary) {
    const newMissionary = await prisma.missionaries.create({
      data: {
        ...content,
      },
    });
    return Response.json({
      message: "ok",
      status: 200,
      data: newMissionary,
    });
  }
  // if it exists, return the existing missionary
  return Response.json({
    message: "existing missionary",
    status: 200,
    data: missionary,
  });
}

export async function GET(req: Request) {
  const allMissionaries = await prisma.missionaries.findMany();
  // console.log(allMissionaries);
  return Response.json({
    message: "ok",
    status: 200,
    data: allMissionaries,
  });
}
