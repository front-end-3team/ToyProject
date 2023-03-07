import styled from "styled-components";
import * as P from "../style";

//postlist.Comments까지 props로 보냄
function Comments({ comments }) {
    return (
        <>
            {comments.map((el) => (
                <P.CommentsBox>
                    {/* 댓글 프로필 이미지 및 닉네임 */}
                    <P.CommentProfile>
                        <Img src={el.User.profile_img} />
                        <div>{el.User.nick_name}</div>
                    </P.CommentProfile>

                    {/* 댓글 프로필 이미지 그 외 나머지 */}
                    <P.CommentCenter>
                        {/* 댓글 상단 */}
                        <div>
                            <div>
                                <div>{el.User.id}</div>
                                <div>작성 날짜</div>
                            </div>
                            <div>
                                <button>✏️️</button>
                                <button>🗑️</button>
                            </div>
                        </div>

                        {/* 댓글 하단 */}
                        <div>{el.content}</div>
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
