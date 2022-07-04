import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditArticle() {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [input, setInput] = useState({
    title: "",
    body: "",
    imgUrl: "",
  });
  const getArticle = () => {
    axios
      .get("/" + articleId)
      .then(({ data }) => {
        setInput(data.article);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getArticle();
  }, []);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("/admin/article/edit/" + articleId, input, {
        headers: { access_token: localStorage.getItem("access_token") },
      })
      .then(({ data }) => {
        navigate("/");
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
            <button>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
