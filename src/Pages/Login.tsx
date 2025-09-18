import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const StyledButton = styled.button` 
        width: 100%;
        padding: 10px;
        background-color:#4CAF50;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s ease; 
`;

const Login: React.FC = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  // const dispatch = useDispatch();
  const handlelogin = () => {
    console.log("function triggered after login button is clicked");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkcyan",
        height: "300px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          textAlign: "center",
          width: "350px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>Login</h1>
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
        <StyledButton onClick={handlelogin}>Login</StyledButton>
      </div>
    </div>
  );
};

export default Login;
