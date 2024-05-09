import { deleteComment } from "../../utils/utils";
import { useState } from "react";

function DeleteComment({ id, comments, setComments }) {

  function handleClick() {
    deleteComment(id);
    const comment = comments.filter((comment) => {
      return comment.comment_id === id;
    });
    const index = comments.indexOf(comment[0]);
    const refreshedComments = [...comments];
    refreshedComments.splice(index, 1);

    setComments(refreshedComments);
  }

  return (
    <div>
      <button onClick={handleClick}>Delete Comment</button>
    </div>
  );
}

export default DeleteComment;
