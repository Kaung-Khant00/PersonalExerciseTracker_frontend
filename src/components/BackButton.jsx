import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ routeTo = null, text = "Back", css = "" }) => {
  const navigate = useNavigate();
  function backTo() {
    if (!routeTo) {
      return navigate(-1);
    }
    navigate(routeTo);
  }
  return (
    <button className={`btn btn-outline btn-primary ${css}`} onClick={backTo}>
      {text}
    </button>
  );
};

export default BackButton;
