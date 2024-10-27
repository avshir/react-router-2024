import { Suspense } from "react";
import {
  useLoaderData,
  useNavigate,
  Link,
  defer,
  Await,
  useAsyncValue,
} from "react-router-dom";

async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
}

async function getCommentsById(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const post = await res.json();
  return post;
}

const singlePostLoader = async ({ params }) => {
  // console.log({ request, params });
  const id = params.id;

  // comments will be show later, after request. We will show preloader from fallback
  // id will be show at start
  return defer({
    post: await getPostById(id),
    id,
    comments: getCommentsById(id),
  });
};

function Post() {
  const post = useAsyncValue();

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

function Comments() {
  const comments = useAsyncValue();

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
}

function SinglePostPage() {
  const { post, id, comments } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <Suspense fallback={<p className="loading">Loading post ...</p>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
      <h3>Comments</h3>
      <Suspense fallback={<p className="loading">Loading comments ...</p>}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>

      <Link to={`/posts/${id}/edit`}>Edit this post</Link>
    </div>
  );
}

export { SinglePostPage, singlePostLoader };
