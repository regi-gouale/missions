import prisma from "@/src/lib/prisma";

export async function POST(req: Request) {
  const { content } = await req.json();
  const profile = await prisma.profiles.create({
    data: {
      ...content,
    },
  });
  return Response.json({
    message: "ok",
    status: 200,
    data: profile,
  });
}

export async function GET(req: Request) {
  const allProfiles = await prisma.profiles.findMany();
  return Response.json({
    message: "ok",
    status: 200,
    data: allProfiles,
  });
}