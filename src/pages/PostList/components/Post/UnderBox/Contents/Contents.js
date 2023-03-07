import * as P from "../style";

function Contents() {
    return (
        <P.ContentsBox>
            <P.Profile>
                <div>img</div>
                <div>닉네임</div>
            </P.Profile>

            <P.ContentsCenter>
                <div>
                    <div>
                        <div>id030303</div>
                        <div>작성 날짜</div>
                    </div>
                    <div>
                        <button>✏️️</button>
                        <button>🗑️</button>
                    </div>
                </div>

                <div>내용</div>
            </P.ContentsCenter>
        </P.ContentsBox>
    );
}

export default Contents;
