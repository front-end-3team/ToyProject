import './App.css';
import Header from './components/Header/Header';
import { MockPost } from './__mocks__/post';

function App() {
    const Posts = MockPost(5);
    /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
    console.log(Posts);

    return (
        <>
            <Header />
        </>
    );
}

export default App;
