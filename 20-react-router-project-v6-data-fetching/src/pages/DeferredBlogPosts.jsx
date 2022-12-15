import { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';
import Posts from '../components/Posts';
import { getSlowPosts } from '../util/api';

function DeferredBlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>

      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
            resolve={loaderData.posts}
            errorElement={<p>Error loading posts</p>}
        >
            {(posts) => <Posts blogPosts={posts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default DeferredBlogPostsPage;

// used by React Router 6.4
// name can be anything
export const loader = () => {
  // return a Promise
  return defer({ posts: getSlowPosts() });
}