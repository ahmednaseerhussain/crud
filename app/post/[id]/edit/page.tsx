'use client';

export default function EditPost({ params }: { params: { id: string } }) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const post = { title: data.get("title") as string, content: data.get("content") as string };
    
    await fetch(`/api/posts/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });

    window.location.href = `/posts/${params.id}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" required />
      <textarea name="content" placeholder="Content" required />
      <button type="submit">Update Post</button>
    </form>
  );
}
