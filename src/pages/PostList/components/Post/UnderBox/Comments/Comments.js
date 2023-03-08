import * as P from '../style';

function Comments({ commentMock }) {
    return (
        <P.CommentsBox>
            {/* 댓글 프로필 이미지 및 닉네임 */}
            <P.CommentProfile>
                <img src={commentMock.User.profile_img} />
                <div>{commentMock.User.nick_name}</div>
            </P.CommentProfile>

            {/* 댓글 프로필 이미지 그 외 나머지 */}
            <P.CommentCenter>
                {/* 댓글 상단 */}
                <div>
                    <div>
                        <div>{commentMock.User.id}</div>
                        <div>작성날짜</div>
                    </div>
                    <div>
                        <button>✏️️</button>
                        <button>🗑️</button>
                    </div>
                </div>

                {/* 댓글 하단 */}
                <div>{commentMock.content}</div>
            </P.CommentCenter>
        </P.CommentsBox>
    );
}

export default Comments;
