import { useState } from "react";
import * as P from "../style";

function Comments({ comments }) {
  const [comment, setComment] = useState(comments);
  // console.log(comment);

  const onChangeInputBtn = (id, content) => {
    const newComment = [...comment];
    const newEditComment = newComment.find((user) => user.User.id === id);
    newEditComment.content = "hi";
    setComment(newEditComment);
    console.log(newEditComment.content);
  };

  const onRemoveComment = (id) => {
    const newComment = comment.filter((user) => user.User.id !== id);
    setComment(newComment);
  };

  return (
    <>
      {comment.map((comment) => (
        <P.CommentsBox key={comment.id}>
          {/* 댓글 프로필 이미지 및 닉네임 */}
          <P.CommentProfile>
            <div src={`${comment.User.profile_img}`}>img</div>
            <div>{comment.User.nick_name}</div>
          </P.CommentProfile>

          {/* 댓글 프로필 이미지 그 외 나머지 */}
          <P.CommentCenter>
            {/* 댓글 상단 */}
            <div>
              <div>
                <div>{comment.User.id}</div>
                <div>날짜 : {("" + comment.createdAt).slice(0, 24)}</div>
              </div>
              <div>
                <button
                  onClick={() =>
                    onChangeInputBtn(comment.User.id, comment.content)
                  }
                >
                  ✏️️
                </button>
                <button onClick={() => onRemoveComment(comment.User.id)}>
                  🗑️
                </button>
              </div>
            </div>

            {/* 댓글 하단 */}
            <div>{comment.content.slice(0, 20)}</div>
          </P.CommentCenter>
        </P.CommentsBox>
      ))}
    </>
  );
}

export default Comments;
