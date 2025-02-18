import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    // Parse the incoming request body
    const { title, content } = await req.json();

    // Basic validation
    if (!title || !content) {
      return new Response(JSON.stringify({ message: 'Title and content are required' }), { status: 400 });
    }

    // Update the post in the database
    const updatedPost = await prisma.post.update({
      where: { id: parseInt(params.id) },
      data: { title, content },
    });

    // Return the updated post as a response
    return new Response(JSON.stringify(updatedPost), { status: 200 });
  } catch (error) {
    // Handle any errors, like post not found
    return new Response(
      JSON.stringify({ message: 'Error updating the post', error: error.message }),
      { status: 500 }
    );
  }
}
