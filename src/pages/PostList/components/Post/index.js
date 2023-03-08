import Contents from './UnderBox/Contents/Contents';
import Comments from './UnderBox/Comments/Comments';
import Pictures from './Picture/Pictures';
import styled from 'styled-components';

function MainList({ post }) {
    return (
        <>
            <MainBox>
                <Pictures post={post} />
                <UnderBox>
                    <P.Contents post={post} />

                    {post.Comments.map((commentMock) => (
                        <P.Comments commentMock={commentMock} />
                    ))}
                </UnderBox>
            </MainBox>
        </>
    );
}

export default MainList;

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
