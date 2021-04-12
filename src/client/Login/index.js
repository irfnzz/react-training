import "./login.css";
import loginimg from "./login.svg";
import swal from "sweetalert";
import React, { useState } from "react";

const Loginpage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleValidate = (e) => {
    e.preventDefault();
    if (user === "admin@gmail.com" && password === "admin")
      swal({ title: "Succesful login", text: "Welcome", type: "success" }).then(
        function () {
          window.location.href = "/main";
        }
      );
    else swal("Wrong credentials", "Please try again", "error");
  };

  return (
    <div className="App-header">
      <h1>Welcome!</h1>
      <br />
      <div className="row">
        <div className="col-md-6">
          <img
            className="float-right"
            src={loginimg}
            width="600"
            alt="loginimage"
          />
        </div>
        <div className="col-md-6 my-auto p-5 rounded loginform ">
          <form onSubmit={handleValidate}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                value={user}
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
