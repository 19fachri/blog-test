import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/login", input)
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
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
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
