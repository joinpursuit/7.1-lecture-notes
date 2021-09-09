import React, { useState } from "react";
import Form from "../components/Form";
// TODO: imports!!
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/postActions";

const FormContainer = () => {
  const [title, setTitle] = useState("");
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    dispatch(addPost({ title, id }));
    setTitle("");
  };

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={title}
    />
  );
};

export default FormContainer;
