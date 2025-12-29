import { useState } from "react";
import InputBox from "../../components/InputBox";
import { Link, useNavigate } from "react-router-dom";
import ROUTE from "../../Api/ROUTE";
import API from "../../Api/api";
import { validateEmail } from "../../helper/validator";
import { toast } from "react-toastify";
import useStore from "../../zustand/zustand";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { setUser } = useStore();
  const signUpApi = async (e) => {
    e.preventDefault();
    if (
      userInfo.username.trim() === "" ||
      userInfo.email.trim() === "" ||
      userInfo.password.trim() === ""
    ) {
      return setError("All fields are required");
    } else if (!validateEmail(userInfo.email)) {
      return setError("Please provide a valid email");
    } else if (userInfo.password.length < 6) {
      return setError("Password must be at least 6 characters long");
    } else {
      try {
        const response = await API.post(ROUTE.AUTH.SIGNUP, {
          ...userInfo,
        });
        if (response.status === 201) {
          setUser(response.data.user);
          toast.success(response.data.message);
          navigate("/dashboard");
        }
      } catch (err) {
        setError(err.response.data.message);
        console.error(err);
      }
    }
  };
  return (
    <>
      <div className="text-primary font-bold text-center text-3xl mb-2">
        SIGNUP
      </div>
      <form onSubmit={signUpApi}>
        <InputBox
          inputValue={userInfo.username}
          setInput={(value) => {
            setUserInfo((pre) => ({ ...pre, username: value }));
          }}
          label={"Username"}
        />
        <InputBox
          inputValue={userInfo.email}
          setInput={(value) => {
            setUserInfo((pre) => ({ ...pre, email: value }));
          }}
          label={"Email"}
        />
        <InputBox
          inputValue={userInfo.password}
          setInput={(value) => {
            setUserInfo((pre) => ({ ...pre, password: value }));
          }}
          label={"Password"}
          type={"password"}
        />

        <div className="text-red-500 mt-5">{error}</div>
        <button className="btn btn-primary py-2  w-full">SIGNUP</button>
      </form>
      <div className="mt-2">
        <span className="mr-2">Already have an account ?</span>
        <Link to={"/auth/login"} className="link link-primary ">
          Login
        </Link>
      </div>
    </>
  );
};

export default Signup;
