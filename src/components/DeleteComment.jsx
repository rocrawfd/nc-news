import { deleteComment } from "../../utils/utils";
import { useState } from "react";
import Popup from "reactjs-popup";

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
      <Popup className='popup' trigger={<button>Delete Comment</button>} position={'right center'}>
        <div className='flatlist'>
          <p>Are you sure?</p>
          <button onClick={handleClick}>Yes</button>
        </div>
      </Popup>
    </div>
  );
}

export default DeleteComment;
