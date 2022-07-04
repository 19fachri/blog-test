import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="mx-20 shadow-lg mb-10 p-8">
      <h1>{article.title}</h1>
      <h1>{article.imgUrl}</h1>
      <p>{article.body}</p>
      <button onClick={() => navigate("/edit/" + article.id)} className="mr-4">
        edit
      </button>
      <button onClick={() => onDelete(article.id)}>Delete</button>
    </div>
  );
}
