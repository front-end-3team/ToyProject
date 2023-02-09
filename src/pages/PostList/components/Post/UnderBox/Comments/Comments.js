function Comments() {
    return (
        <div>
            {/* 댓글 프로필 이미지 및 닉네임 */}
            <div>
                <div>img</div>
                <div>닉네임</div>
            </div>

            {/* 댓글 프로필 이미지 그 외 나머지 */}
            <div>
                {/* 댓글 상단 */}
                <div>
                    <div>
                        <div>id030303</div>
                        <div>작성 날짜</div>
                    </div>
                    <div>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>

                {/* 댓글 하단 */}
                <div>내용</div>
            </div>
        </div>
    );
}

export default Comments;
