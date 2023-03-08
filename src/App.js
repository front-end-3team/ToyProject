import Header from './components/Header/Header';
import Modal from './pages/Modal/Modal';
import Index from './pages/PostList/components/Post/index';
import { MockPost } from './__mocks__/post';

function App() {
    const Posts = MockPost(10);
    /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/

    console.log(Posts);

    return (
        <>
            {/* <Modal /> */}
            <Header />

            {Posts.map((post) => (
                <Index post={post} />
            ))}
        </>
    );
}

export default App;
