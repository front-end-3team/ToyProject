import * as P from '../style';

function Contents({ post }) {
    return (
        <P.ContentsBox>
            <P.Profile>
                <div>{post.Post_img}</div>
                <img src={post.User.profile_img} />
            </P.Profile>

            <P.ContentsCenter>
                <div>
                    <div>
                        <div>{post.User.nick_name}</div>
                        <div>작성 날짜</div>
                    </div>
                    <div>
                        <button>✏️️</button>
                        <button>🗑️</button>
                    </div>
                </div>

                <div>{post.content}</div>
            </P.ContentsCenter>
        </P.ContentsBox>
    );
}

export default Contents;
