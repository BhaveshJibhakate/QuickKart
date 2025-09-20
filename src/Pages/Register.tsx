import styled from "styled-components";
import { registerUser } from "../Redux/authActions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  background-color: #0f9f5c;
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
  max-width: 400px;
  min-height: 300px;
  width:100%;
  border: 1px solid #ccc;
  background-color: #61e1b2;
  padding: 10px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    padding: 15px;
    margin: 20px auto;
  }
`;
interface User {
  name: string;
  username: string;
  password: string;
}
const Register = () => {
  const [user, setUser] = useState<User>({
    name: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const notify = () =>
    toast.success("Registerd Successfully", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  const handleregister = () => {
    dispatch(registerUser(user));
    notify();
    setUser({ name: "", username: "", password: "" });
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <StyledInput
        type="text"
        placeholder="enter your name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <StyledInput
        type="text"
        placeholder="enter username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <StyledInput
        type="password"
        placeholder="enter password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <StyledButton onClick={handleregister}>Register</StyledButton>
      <ToastContainer />
      <p>
        Already have account <Link to="/login">login</Link>
      </p>
    </Container>
  );
};

export default Register;
