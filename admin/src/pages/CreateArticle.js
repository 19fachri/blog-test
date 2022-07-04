import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateArticle() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    body: "",
    imgUrl: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/admin/article/create", input, {
        headers: {
          access_token: localStorage.getItem("acces_token"),
        },
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>Add Article</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={input.title}
            />
          </div>
          <div>
            <label>Body</label>
            <input
              type="text"
              name="body"
              onChange={handleChange}
              value={input.body}
            />
          </div>
          <div>
            <label>image Url</label>
            <input
              type="text"
              name="imgUrl"
              onChange={handleChange}
              value={input.imgUrl}
            />
          </div>
          <div>
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
