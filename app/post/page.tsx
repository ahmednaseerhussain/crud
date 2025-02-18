import { Post } from "@prisma/client";

export default async function PostsPage() {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <a href={`/posts/${post.id}`}>View</a>
        </div>
      ))}
    </div>
  );
}
