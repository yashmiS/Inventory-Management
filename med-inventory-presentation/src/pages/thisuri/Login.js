import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberChecked, setRememberChecked] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxClick = () => {
    setRememberChecked(!rememberChecked);
  };

  return (
    <div
      style={{
        backgroundColor: "#5696fc",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFF",
          display: "flex",
          height: "70vh",
          width: 1000,
          borderRadius: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 500,
            borderRight: "2px solid #56ecfc",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <img src={logo} height={120} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 500,
          }}
        >
          <h3
            style={{
              backgroundColor: "#56defc",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 120,
              paddingRight: 120,
              borderRadius: 10,
              marginBottom: 50,
            }}
          >
            Admin
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginBottom: 20,
                width: 350,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <label>Username</label>
              <input onChange={handleUsernameChange} placeholder="Username" />
            </div>
            <div
              style={{
                marginBottom: 20,
                width: 350,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <label>Password</label>
              <input
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
              />
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  marginRight: 15,
                }}
              >
                <input
                  type="checkbox"
                  checked={rememberChecked}
                  onClick={handleCheckboxClick}
                />
              </div>
              <div>
                <label>Remember me</label>
              </div>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: "#56defc",
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 120,
                  paddingRight: 120,
                  borderRadius: 10,
                  marginTop: 30,
                }}
              >
                <span>Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
