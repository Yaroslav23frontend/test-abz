import React, { useContext, useState } from "react";
const PostContext = React.createContext();

export function usePostContext() {
  return useContext(PostContext);
}
export default function PostProivider({ children }) {
  const [errorPost, setErrorPost] = useState("");
  const [postResult, setPostResult] = useState({});
  function fetchPOST(data, token, url) {
    const formData = new FormData();
    formData.append("position_id", data.position_id);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("photo", data.photo);
    fetch(url, {
      method: "POST",
      body: formData,
      headers: { Token: token },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPostResult(data);
        setErrorPost("success");
      })
      .catch(function (err) {
        setErrorPost(err);
      });
  }
  const value = { errorPost, postResult, fetchPOST };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
