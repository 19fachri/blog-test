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
      <div className="w-96 shadow-2xl px-4 py-8">
        <h1 className="flex justify-center my-8 text-lg font-bold uppercase">
          Register Page
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-4 capitalize">
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={input.username}
              className="px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4 capitalize">
            <label>email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={input.email}
              className="px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4 capitalize">
            <label>password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={input.password}
              className="px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <button className="border w-full py-2">Register</button>
            <button
              onClick={() => navigate("/login")}
              className="border w-full py-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
