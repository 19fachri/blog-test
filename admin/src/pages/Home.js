import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const getArticles = () => {
    axios
      .get("/")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getArticles();
  }, []);
  return <div className="flex justify-center"></div>;
}
