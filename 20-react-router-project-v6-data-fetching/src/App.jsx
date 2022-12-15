import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostsLoader } from './pages/BlogPosts';
import DeferredBlogPostsPage, { loader as deferredBlogPostsLoader } from './pages/DeferredBlogPosts';
import NewPostPage, { action as newPostAction } from './pages/NewPost';
import PostDetailPage, { loader as blogPostDetailLoader } from './pages/PostDetail';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/Welcome';
import Error from './pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        {/* <Route index element={<BlogPostsPage />} loader={blogPostsLoader} /> */}
        <Route index element={<DeferredBlogPostsPage />} loader={deferredBlogPostsLoader} />
        <Route path=":id" element={<PostDetailPage />} loader={blogPostDetailLoader} />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} action={newPostAction} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
