import Header from "../../../../components/Header/Header";
import Contents from "./UnderBox/Contents/Contents";
import Comments from "./UnderBox/Comments/Comments";
import Pictures from "./Picture/Pictures";
import styled from "styled-components";
import { MockPost } from "../../../../__mocks__/post";

function Index() {
  const Posts = MockPost(10);

  return (
    <>
      <Header />
      {Posts.map((post) => (
        <MainBox key={post.id}>
          <Pictures img={post.Post_img} />
          <UnderBox>
            <P.Contents contents={post} />
            <P.Comments comments={post.Comments} />
          </UnderBox>
        </MainBox>
      ))}
      {/* <MainBox>
        <Pictures />
        <UnderBox>
          <P.Contents />
          <P.Comments />
        </UnderBox>
      </MainBox> */}
    </>
  );
}

export default Index;

const MainBox = styled.div`
  margin: 0 auto;
  border: 1px solid #252c41;
  width: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-radius: 5px;
`;

const UnderBox = styled.div`
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f5f9;
  border-radius: 20px;
  padding-top: 15px;
`;

const P = {
  Contents,
  Comments,
};
