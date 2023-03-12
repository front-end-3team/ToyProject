import { useState } from "react";
import styled from "styled-components";
import * as P from "../style";
import 짱아 from "../../../../../../__mocks__/my_profile_imgs/짱아.png";
import Slide from "../../../../../../components/Slide";

//postlist.Comments까지 props로 보냄
function Comments({ comments, posts, setPosts }) {
  const [view, setview] = useState(false);
  const [inputs, setInputs] = useState("");

  const [comment, setComment] = useState(comments);

  const onRemoveComment = (id) => {
    const newComment = comment.filter((user) => user.User.id !== id);
    setComment(newComment);
  };

  const onChangeInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const { contents, nickname, name } = inputs;

  const onClickChange = (el) => {
    setview((prev) => !prev);
    if (el.myComment === "N") return alert("자신 댓글만 수정 가능합니다.");

    el.content = contents;
    el.User.nick_name = name;
    el.User.id = nickname;
    if (view === true) {
      el.User.profile_img = 짱아;
    }
  };

  return (
    <>
      {comment.map((el) => (
        <P.CommentsBox>
          {/* 댓글 프로필 이미지 및 닉네임 */}
          <P.CommentProfile>
            <Img src={el.User.profile_img} />

            {el.myComment === "Y" && view === true ? (
              <input onChange={onChangeInputs} name="name" />
            ) : (
              <div>{el.User.nick_name}</div>
            )}
          </P.CommentProfile>

          {/* 댓글 프로필 이미지 그 외 나머지 */}
          <P.CommentCenter>
            {/* 댓글 상단 */}
            <div>
              <div>
                {el.myComment === "Y" && view === true ? (
                  <input onChange={onChangeInputs} name="nickname" />
                ) : (
                  <div>{el.User.id}</div>
                )}
                <div>작성 날짜</div>
              </div>
              <div>
                <button onClick={() => onClickChange(el)}>✏️️</button>
                <button onClick={() => onRemoveComment(el.User.id)}>🗑️</button>
              </div>
            </div>
            {/* 댓글 하단 */}
            {el.myComment === "Y" && view === true ? (
              <textarea name="contents" onChange={onChangeInputs} />
            ) : (
              <div>{el.content}</div>
            )}
          </P.CommentCenter>
        </P.CommentsBox>
      ))}
    </>
  );
}

export default Comments;

const Img = styled.img`
  border-radius: 50px;
`;
