import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { id } = useParams();
  const { sendRequest, data, status } = useHttp(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendRequest(id);
  }, [id, sendRequest]);

  const addedCommentHandler = useCallback(() => {
    setIsAddingComment(false);
    sendRequest(id);
  }, [id, sendRequest])

  let comments;

  if(status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(status === 'completed' && (data && data.length > 0)) {
    comments = <CommentsList comments={data} />
  }

  if(status === 'completed' && (!data || data.length === 0)) {
    comments = <p className="centered">No comments yet...</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={id} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
