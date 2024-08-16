import React from "react";

// const commentComponentMaker = (data) => {
//   return (
//     <div>
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
//         alt=""
//       />
//       <p>{data}</p>
//       <h3>Replies</h3>
//       {data.replies.length > 0 && data.replies.map((reply, index)=>())}
//     </div>
//   );
// };

const commentsData = [
  {
    name: "Joe",
    text: "This is a nice video.",
    replies: [
      {
        name: "Joe Stephen",
        text: "Yes it is!",
        replies: [{ name: "Shibumon", text: "No it's not.", replies: [] }],
      },
    ],
  },
  {
    name: "Joe Stephen",
    text: "Informational video.",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  if (comments.length > 0) {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div key={index} className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  }
  // return <div>No comments yet.</div>;
};

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-sm my-1">
      <img
        className="w-12 h-12"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="user-avatar"
      />
      <div className="px-3">
        <h3 className="font-bold">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
