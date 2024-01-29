import React from "react";
import "./post.scss";
import Posts from "../post/Posts";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Post = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => makeRequest.get("/post").then((res) => res.data),
  });

  console.log(data, ">>>>>>>>>>>>>>dsjd");

  return (
    <div className="post">
      {error
        ? "something went wrong "
        : isLoading
        ? "loading"
        : data.map((post) => <Posts post={post} key={post.id} />)}
    </div>
  );
};

export default Post;
