import "./App.css";
import Modal from "./pages/Modal/Modal";
import Header from "./components/Header/Header";
import Index from "./pages/PostList/components/Post/index";
import { MockPost } from "./__mocks__/post";
import { isModal } from "./store/Modal_page";
import { useContext } from "react";

function App() {
    const Posts = MockPost(5);
    /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
    console.log(Posts);

    const { isModalOpen, setIsModalOpen } = useContext(isModal);
    return (
        <>
            <Header />
            {isModalOpen && <Modal />}
            <Index />
        </>
    );
}

export default App;
