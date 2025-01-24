export default async function BlogDetails({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div>
      {/* <a href="/" className="text-blue-500 hover:underline mb-4 block">
        &larr; Back to Home
      </a> */}
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
}
