import styled from "styled-components";

function Pictures({ img }) {
  return (
    <>
      <Images src={`${img}`}>{img}</Images>
    </>
  );
}

export default Pictures;

const Images = styled.div`
  width: 599px;
  height: 350px;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 20px;
`;
