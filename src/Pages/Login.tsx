import styled from "styled-components";
import { loginUser } from "../Redux/authActions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  background-color: #4163e1;
  font-size: 16px;
  padding: 8px;
  transition: background 0.3s ease;
  margin-top: 20px;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 10px;
`;
const Container = styled.div`
  max-width:400px;
  min-height:300px;
  width:100%;
  border: 1px solid #ccc;
  background-color: #c1cdef;
  padding: 10px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: "0 8px 16px rgba(0, 0, 0, 0.2)";

   @media (max-width: 480px) {
    padding: 15px;
    margin: 20px auto;
  }
`;
const Login = () => {
  const navigate = useNavigate();
  const isAllowed = useSelector((state: any) => state.auth.isAuthenticated);
  const Error = useSelector((state: any) => state.auth.error);

  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const handlelogin = () => {
    console.log("function triggered after login button is clicked");
    dispatch(loginUser(user));
  };
  useEffect(() => {
    if (isAllowed) {
      navigate("/products");
    }
    if (Error) {
      const notify = () =>
        toast.error("Invalid Username or Password", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      notify();
    }
  }, [isAllowed,Error,navigate]);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <StyledInput
        type="text"
        placeholder="enter your name"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <StyledInput
        type="password"
        placeholder="enter your password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <StyledButton onClick={handlelogin}>Login</StyledButton>
      <ToastContainer />
      <p>
        Don't have account <Link to="/register">sign up</Link>
      </p>
    </Container>
  );
};
export default Login;
