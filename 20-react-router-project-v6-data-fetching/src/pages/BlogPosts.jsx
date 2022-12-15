import { useLoaderData } from 'react-router-dom';
import Posts from '../components/Posts';
import { getPosts } from '../util/api';

function BlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loaderData} />
    </>
  );
}

export default BlogPostsPage;

// used by React Router 6.4
// name can be anything
export const loader = () => {
  // return a Promise
  return getPosts();
}