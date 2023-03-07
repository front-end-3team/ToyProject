import { useContext } from "react";
import styled from "styled-components";
import { modalContext } from "../../context/ModalContext";

function Modal() {
    const { modalview, setModalView } = useContext(modalContext);

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
                placeholder="내용을 입력하세요"
            ></Contents>

            {/* <FileBox>
                <input placeholder="첨부파일" />
                <label>📁</label>
                <input type="file" />
            </FileBox> */}

            <File type="file" />

            <Button>
                <button>작성</button>
                <button onClick={() => setModalView(false)}>취소</button>
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
    width: 600px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
        font-size: 20px;
    }
    & > div:last-child > div > span {
        font-weight: 800;
        padding-right: 10px;
    }
    & > div:last-child > div > input {
        font-size: 20px;
        border: none;
        background-color: transparent;
    }
`;

const Title = styled.input`
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid black;
`;

const Contents = styled.textarea`
    height: 195px;
    border: none;
    background-color: transparent;
    font-size: 20px;
    padding: 10px 10px;
    resize: none;
`;

const File = styled.input`
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    background-color: transparent;

    /* & > input:first-child {
        display: inline-block;
        height: 40px;
        padding: 0 10px;
        vertical-align: middle;
        border: 1px solid #dddddd;
        width: 78%;
        color: #999999;
    }

    & > label {
        display: inline-block;
        padding: 10px 20px;
        color: #fff;
        vertical-align: middle;
        background-color: #999999;
        cursor: pointer;
        height: 40px;
        margin-left: 10px;
    }

    & > input:last-child {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
    } */
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    & > button {
        margin: 0px 20px;
        font-size: 20px;
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
