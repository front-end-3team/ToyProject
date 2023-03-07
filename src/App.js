import "./App.css";
import Modal from "./pages/Modal/Modal";
import Index from "./pages/PostList/components/Post/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  //   const Posts = MockPost(10);
  /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
  //   console.log(Posts);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/modal",
      element: <Modal />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
