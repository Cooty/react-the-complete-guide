import { useLoaderData } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
  const postData = useLoaderData();

  return (
    <BlogPost title={postData.title} text={postData.body} />
  );
}

export default PostDetailPage;

// React router passes an object to the function that
// contains the request and the params
export const loader = ({params}) => {
  return getPost(params.id);
}