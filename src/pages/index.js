import { MockPost } from '../__mocks__/post';
import MainList from './PostList/components/Post';
import Modal from '../pages/Modal/Modal.js';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalOpen';

function Index() {
    const Posts = MockPost(10);
    /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/

    console.log(Posts);

    const [modalOpen, setModalOpen] = useContext(ModalContext);

    const onClickCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {modalOpen && <Modal onClose={onClickCloseModal} />}

            {Posts.map((post) => (
                <MainList post={post} />
            ))}
        </>
    );
}

export default Index;
