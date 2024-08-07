import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

export const UsersTable = () => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
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
            <th scope="col">名前</th>
            <th scope="col">メールアドレス</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => user.name.includes(inputValue))
            .map((user) => (
              <tr key={user.email}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
