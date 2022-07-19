import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles.css";

function Login() {
  return (
    <div
      className="log"
      style={{ position: "absolute", left: "0px", top: "0px", width: "100vw" }}
    >
      <div style={{ display: "flex", width: "100vw" }}>
        <h3 style={{ fontSize: "1.5em", marginTop: "10px" }}>
          Digi<span>Comp+</span>
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "225px",
            marginLeft: "77vw"
          }}
        >
          <span style={{ color: "grey", cursor: "pointer" }}>New User?</span>
          <span style={{ color: "red", cursor: "pointer" }}>
            Join DigiComp+
          </span>
        </div>
      </div>
      <div id="body" style={{ width: "100vw" }}>
        <img
          src="https://source.unsplash.com/1600x900/?company"
          alt="companys"
        />
        <form style={{ backgroundColor: "lightgrey", width: "350px" }}>
          <div>
            <p
              style={{
                fontSize: "0.75em",
                marginTop: "30px",
                marginLeft: "30px"
              }}
            >
              WELCOME TO
            </p>
            <h3
              style={{
                fontSize: "1.5em",
                marginTop: "10px",
                marginLeft: "20px"
              }}
            >
              Digi<span>Comp+</span>
            </h3>
          </div>
          <div id="formInput">
            <div
              className="input"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                type="text"
                placeholder="UserName/Email ID*"
                style={{ width: "80%" }}
              />
              <input
                type="text"
                placeholder="Password*"
                style={{ width: "80%" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "300px",
                  color: "black",
                  opacity: "0.6",
                  fontWeight: "bolder"
                }}
              >
                <span>
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </span>
                <span
                  style={{ marginTop: "8px", textDecorationLine: "underline" }}
                >
                  Forgot Password
                </span>
              </div>
              <button style={{ width: "100%" }}>Login</button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  margin: "20px"
                }}
              >
                <span
                  style={{
                    color: "black",
                    opacity: "0.7",
                    fontWeight: "bolder",
                    cursor: "pointer"
                  }}
                >
                  New User?
                </span>
                <span style={{ color: "red", cursor: "pointer" }}>
                  Join DigiComp+
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Register(props) {
  let isHide = "none";
  if (props.state) {
    isHide = "none";
  } else {
    isHide = "flex";
  }
  const [isLoginHide, setIsLoginHide] = useState(false);
  return (
    <>
      <form style={{ display: isHide }}>
        <h2>Register Your company</h2>
        <div id="formInput">
          <div className="input">
            <input type="text" placeholder="Country*" required />
            <input type="text" placeholder="Company Name*" required />
          </div>
          <div className="input">
            <select required>
              <option value="" disabled selected hidden>
                Registeration Reference Type*
              </option>
              <option>B</option>
              <option>C</option>
            </select>
            <input type="text" required placeholder="Registeration Number*" />
          </div>
          <div className="input">
            <input type="text" required placeholder="First Name*" />
            <input type="text" required placeholder="Last Name*" />
          </div>
          <div className="input">
            <input type="email" required placeholder="Email Id*" />
            <input type="tel" required placeholder="Phone Number*" />
          </div>
        </div>
        <Link to="/login/" element={<Login />}>
          <button
            onClick={function () {
              setIsLoginHide(!isLoginHide);
            }}
          >
            Register Now
          </button>
        </Link>
        <p>
          Already Register? <span>Login</span>{" "}
        </p>
      </form>
    </>
  );
}

function Main() {
  const [isHide, setIsHide] = useState(true);

  return (
    <>
      <div id="header">
        <h3>
          Digi<span>Comp+</span>
        </h3>
        <button
          onClick={function () {
            setIsHide(!isHide);
          }}
        >
          How to Register
        </button>
      </div>
      <div id="body">
        <img
          src="https://source.unsplash.com/1600x900/?company"
          alt="companys"
        />
        <Register state={isHide} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login/" element={<Login />} />
      </Routes>
    </div>
  );
}
