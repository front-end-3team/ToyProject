import styled from "styled-components";

function Modal() {
    return (
        <ModalBox>
            <Top>
                <div>이미지</div>
                <div>
                    <div>
                        <span>아이디</span>
                        <input placeholder="ID" />
                    </div>
                    <div>
                        <span>닉네임</span>
                        <input placeholder="NickName" />
                    </div>
                </div>
            </Top>

            <Title type="text" placeholder="제목을 입력하세요" />

            <Contents
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="내용을
                입력하세요"
            ></Contents>

            <File type="file" placeholder="제목을 입력하세요" />

            <Button>
                <button>작성</button>
                <button>취소</button>
            </Button>
        </ModalBox>
    );
}
export default Modal;

const ModalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 40px;
    width: 919px;
    height: 712px;
    background-color: #f4f5f9;
    border-radius: 20px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    & > div:first-child {
        padding-right: 20px;
    }
    & > div:last-child {
        font-size: 22px;
    }
    & > div:last-child > div > span {
        font-weight: 800;
        padding-right: 10px;
    }
    & > div:last-child > div > input {
        font-size: 23px;
        border: none;
        background-color: transparent;
    }
`;

const Title = styled.input`
    font-size: 25px;
    padding: 10px 20px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid black;
`;

const Contents = styled.textarea`
    height: 370px;
    border: none;
    background-color: transparent;
    font-size: 25px;
    padding: 10px 20px;
`;

const File = styled.input`
    font-size: 25px;
    padding: 10px 20px;
    border: none;
    background-color: transparent;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    & > button {
        margin: 0px 20px;
        font-size: 25px;
        padding: 8px 30px;
        border: none;
        border-radius: 15px;
    }
    & > button {
        background-color: #252c41;
        color: white;
        :hover {
            background-color: #f1404b;
        }
    }
`;
