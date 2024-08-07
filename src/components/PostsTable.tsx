import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  userId: number;
  title: string;
  body: string;
};

export const PostsTable = () => {
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      });
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        className="w-100"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ユーザID</th>
            <th scope="col">タイトル</th>
            <th scope="col">本文</th>
          </tr>
        </thead>
        <tbody>
          {posts
            .filter((post) => post.body.includes(inputValue))
            .map((post) => (
              <tr key={post.body}>
                <th scope="row">{post.userId}</th>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
