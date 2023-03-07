import * as P from "../style";

function Comments() {
  return (
    <P.CommentsBox>
      {/* 댓글 프로필 이미지 및 닉네임 */}
      <P.CommentProfile>
        <div>img</div>
        <div>닉네임</div>
      </P.CommentProfile>

      {/* 댓글 프로필 이미지 그 외 나머지 */}
      <P.CommentCenter>
        {/* 댓글 상단 */}
        <div>
          <div>
            <div>id050505</div>
            <div>작성 날짜</div>
          </div>
          <div>
            <button>✏️️</button>
            <button>🗑️</button>
          </div>
        </div>

        {/* 댓글 하단 */}
        <div>내용</div>
      </P.CommentCenter>
    </P.CommentsBox>
  );
}

export default Comments;
