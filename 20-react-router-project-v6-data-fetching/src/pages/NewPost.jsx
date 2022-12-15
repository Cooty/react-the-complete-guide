import { useNavigate, useActionData, redirect, useNavigation } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  const navigate = useNavigate();
  const actionData = useActionData();
  const navigation = useNavigation();
  console.log(navigation);

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      { (actionData && actionData.status && actionData.message) ? 
          (<p>{actionData.message}</p>)
        :
          null
      }
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === 'submitting' || navigation.state === 'loading'}
      />
    </>
  );
}

export default NewPostPage;

export const action = async ({request}) => {
  const formData = await request.formData();
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text')
  };

  try {
    await savePost(post);
  } catch(e) {
    if(e.status === 442) {
      return e;
    }
    return e;
  }
  return redirect('/blog');
}
