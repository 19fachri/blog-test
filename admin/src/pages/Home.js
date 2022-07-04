import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const getArticles = () => {
    axios
      .get("/")
      .then(({ data }) => {
        setArticles(data.articles);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete("/admin/article/delete/" + id, {
        headers: { access_token: localStorage.getItem("access_token") },
      })
      .then(() => {
        getArticles();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className="flex justify-center flex-col py-10">
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/add")}
          className="border px-4 py-2 rounded-md"
        >
          Add New Article
        </button>
      </div>
      <div>
        {articles.map((el, i) => {
          return <ArticleCard key={i} article={el} onDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
}
