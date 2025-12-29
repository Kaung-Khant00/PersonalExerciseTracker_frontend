import InputBox from "../../components/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useStore from "../../zustand/zustand";
import { validateEmail } from "../../helper/validator";
import API from "../../Api/api";
import API_ROUTES from "../../Api/ROUTE";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { setUser } = useStore();
  const loginAPI = async (e) => {
    e.preventDefault();
    if (userInfo.email.trim() === "" || userInfo.password.trim() === "") {
      return setError("All fields are required");
    } else if (!validateEmail(userInfo.email)) {
      return setError("Please provide a valid email");
    } else if (userInfo.password.length < 6) {
      return setError("Password must be at least 6 characters long");
    } else {
      try {
        const response = await API.post(API_ROUTES.AUTH.LOGIN, {
          ...userInfo,
        });
        if (response.status === 200) {
          setUser(response.data.user);
          toast.success(response.data.message);
          navigate("/dashboard");
        }
      } catch (err) {
        console.error(err);
        setError(err.response.data?.message);
      }
    }
  };
  return (
    <>
      <div className="text-primary font-bold text-center text-3xl mb-2">
        LOGIN
      </div>
      <form onSubmit={loginAPI}>
        <InputBox
          label={"Email"}
          type={"text"}
          inputValue={userInfo.email}
          setInput={(value) => {
            setUserInfo((pre) => ({ ...pre, email: value }));
          }}
        />
        <InputBox
          label={"Password"}
          type={"password"}
          inputValue={userInfo.password}
          setInput={(value) => {
            setUserInfo((pre) => ({ ...pre, password: value }));
          }}
        />
        <div className="text-red-500 mt-5">{error}</div>
        <button className="btn btn-primary py-2 w-full">LOGIN</button>
      </form>
      <div className="mt-2">
        <span className="mr-2">Doesn't have an account ?</span>
        <Link to={"/auth/signup"} className="link link-primary ">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Login;
