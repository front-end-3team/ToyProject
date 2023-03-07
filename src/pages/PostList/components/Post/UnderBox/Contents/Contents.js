import { useState } from "react";
import * as P from "../style";

function Contents({ contents }) {
  const [content, setContent] = useState(contents);
  //   console.log(contents);

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
              <button>✏️️</button>
              <button>🗑️</button>
            </div>
          </div>

          <div>{content.content.slice(0, 20)}</div>
        </P.ContentsCenter>
      </P.ContentsBox>
    </>
  );
}

export default Contents;
