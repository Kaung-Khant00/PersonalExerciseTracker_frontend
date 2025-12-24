import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const InputBox = ({ type, label, placeholder }) => {
  const [inputType, setInputType] = useState(type);

  function changeInputType() {
    setInputType((pre) => (pre === "text" ? "password" : "text"));
  }

  return (
    <fieldset className="fieldset relative">
      <legend className="fieldset-legend text-lg">{label}</legend>
      <input
        type={inputType}
        placeholder={placeholder}
        className="input w-full"
      />
      {type === "password" && (
        <div
          onClick={changeInputType}
          className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
        >
          {inputType === "text" ? (
            <FaRegEye className="text-bla" size={25} />
          ) : (
            <FaRegEyeSlash className="text-bla" size={25} />
          )}
        </div>
      )}
    </fieldset>
  );
};

export default InputBox;
