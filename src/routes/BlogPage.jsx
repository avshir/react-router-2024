import { Suspense } from "react";
import { defer, Link, Await } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};

const blogLoader = async () => {
  return defer({
    posts: getPosts(),
  });
};

function BlogPage() {
  const { posts } = useLoaderData();
  console.log(posts);

  return (
    <div>
      <h1>Blog</h1>
      <h3>Our news</h3>
      <ul>
        <Suspense fallback={<p className="loading">Loading posts ...</p>}>
          <Await resolve={posts}>
            {(resolvedPosts) => (
              <>
                {resolvedPosts.map((post) => (
                  <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                  </Link>
                ))}
              </>
            )}
          </Await>
        </Suspense>
      </ul>
    </div>
  );
}

export { BlogPage, blogLoader };
