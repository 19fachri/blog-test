import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/register", input)
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={input.username}
            />
          </div>
          <div>
            <label>email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={input.email}
            />
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={input.password}
            />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
