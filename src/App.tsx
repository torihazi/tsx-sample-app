import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { PostsTable } from "./components/PostsTable";
import { UsersTable } from "./components/UsersTable";

type CheckList = {
  isUserCheck: boolean;
  isPostCheck: boolean;
};

function App() {
  const [checkList, setCheckList] = useState<CheckList>({
    isUserCheck: true,
    isPostCheck: false,
  });

  return (
    <>
      <div className="container-fluid m-5">
        {/* 最初の切り替えボタン */}
        <div
          className="btn-group mb-3"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            checked={checkList.isUserCheck}
            onChange={() =>
              setCheckList({
                ...checkList,
                isUserCheck: true,
                isPostCheck: false,
              })
            }
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            ユーザ一覧
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            checked={checkList.isPostCheck}
            onChange={() =>
              setCheckList({
                ...checkList,
                isUserCheck: false,
                isPostCheck: true,
              })
            }
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            投稿一覧
          </label>
        </div>
        <div>{checkList.isUserCheck ? <UsersTable /> : <PostsTable />}</div>
      </div>
    </>
  );
}

export default App;
