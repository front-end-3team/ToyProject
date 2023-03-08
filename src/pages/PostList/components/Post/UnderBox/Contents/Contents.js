import { useState } from "react";
import * as P from "../style";

function Contents({ contents }) {
  const [content, setContent] = useState(contents);
  //   console.log(content);

  const [state, setState] = useState(false);

  const onChangeBtn = () => {
    setState((prev) => !prev);
  };

  const onRemoveContent = (id) => {
    const newContent = [{ ...content }];
    const removedContent = newContent.filter((user) => user.User.id !== id);
    setContent({ ...removedContent });
  };

  return (
    <>
      <P.ContentsBox>
        <P.Profile>
          <div src={`${content.User.profile_img}`}>img</div>
          <div>{content.User.nick_name}</div>
        </P.Profile>

        <P.ContentsCenter>
          <div>
            <div>
              <div>{content.User.id}</div>
              <div>날짜 : {("" + content.createdAt).slice(0, 24)}</div>
            </div>
            <div>
              <button
                onClick={() => {
                  onChangeBtn();
                }}
              >
                ✏️️
              </button>
              <button
                onClick={() => {
                  onRemoveContent(content.User.id);
                }}
              >
                🗑️
              </button>
            </div>
          </div>

          <div>{state ? <input /> : content.content.slice(0, 20)}</div>
        </P.ContentsCenter>
      </P.ContentsBox>
    </>
  );
}

export default Contents;
