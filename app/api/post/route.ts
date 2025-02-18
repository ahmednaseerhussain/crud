import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { title, content } = await req.json();
  const post = await prisma.post.create({ data: { title, content } });
  return new Response(JSON.stringify(post), { status: 201 });
}

export async function GET() {
    const posts = await prisma.post.findMany();
    return new Response(JSON.stringify(posts), { status: 200 });
  }
  