import styled from "styled-components";
import * as P from "../style";
import { useState } from "react";

function Contents({ postlist }) {
  const [onEdit, setOnEdit] = useState(false);
  const [onEditContent, setOnEditContent] = useState({
    nick: "",
    id: "",
    content: "",
  });

  const onContentEdit = () => {
    if (postlist.myPost === "Y") {
      setOnEdit((prev) => !prev);
    } else alert("본인이 작성한 댓글만 삭제 가능합니다!");
    postlist.User.nick_name = onEditContent.nick;
    postlist.User.id = onEditContent.id;
    postlist.content = onEditContent.content;
    console.log(postlist);
  };

  const onChangeContent = (e) => {
    const { name, value } = e.target;
    setOnEditContent({ ...onEditContent, [name]: value });
  };

  return (
    <P.ContentsBox>
      <P.Profile>
        <Img src={postlist.User.profile_img} />
        {onEdit ? (
          <input name="nick" onChange={onChangeContent} />
        ) : (
          <div>{postlist.User.nick_name}</div>
        )}
      </P.Profile>

      <P.ContentsCenter>
        <div>
          <div>
            {onEdit ? (
              <input name="id" onChange={onChangeContent} />
            ) : (
              <div>{postlist.User.id}</div>
            )}
            <div>{("" + postlist.createdAt).slice(0, 24)}</div>
          </div>
          <div>
            {onEdit ? (
              <button onClick={onContentEdit}>완료</button>
            ) : (
              <button onClick={onContentEdit}>✏️️</button>
            )}
            <button>🗑️</button>
          </div>
        </div>

        {onEdit ? (
          <textarea name="content" onChange={onChangeContent} />
        ) : (
          <div>{postlist.content}</div>
        )}
      </P.ContentsCenter>
    </P.ContentsBox>
  );
}
//   return (
//     <P.ContentsBox>
//       <P.Profile>
//         <Img src={postlist.User.profile_img} />
//         <div>{postlist.User.nick_name}</div>
//       </P.Profile>

//       <P.ContentsCenter>
//         <div>
//           <div>
//             {postlist.myComment === "Y" && view === true ? (
//               <input onChange={onChangeInputs} name="name" />
//             ) : (
//               <div>{postlist.User.id}</div>
//             )}
//             {/* <div>{postlist.User.id}</div> */}
//             <div>{String(postlist.createdAt)}</div>
//           </div>
//           <div>
//             <button onClick={onChangeContents}>✏️️</button>
//             <button>🗑️</button>
//           </div>
//         </div>

//         <div>{postlist.content}</div>
//       </P.ContentsCenter>
//     </P.ContentsBox>
//   );
// }

export default Contents;

const Img = styled.img`
  border-radius: 50%;
`;
