function Modal() {
    return (
        <>
            <div>
                <div>이미지</div>
                <div>
                    <div>아이디</div>
                    <div>닉네임</div>
                </div>
            </div>

            <input type="text" placeholder="제목을 입력하세요" />

            <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요"></textarea>

            <input type="file" placeholder="제목을 입력하세요" />

            <div>
                <button>작성</button>
                <button>취소</button>
            </div>
        </>
    );
}

export default Modal;
