import React, { useState } from "react";

import Form from "../components/Form";

const FormContainer = () => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
