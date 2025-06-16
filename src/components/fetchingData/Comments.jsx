import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    //fetch data here

    let ignore = false;

    const startFetching = async () => {
      const json = await fetchData(postId);
      if (!ignore) {
        setComments(json);
      }
    };
    startFetching();

    return () => {
      ignore = true;
    };
  }, [postId]);

  return (
    <div>
      <ul>
        {comments.length === 0
          ? ""
          : comments.map((comment) => <li key={comment.id}>{comment.name}</li>)}
      </ul>
    </div>
  );
};

export default Comments;
