import { useState } from "react";

type CheckList = {
  isUserCheck: boolean;
  isPostCheck: boolean;
};

export const ContentTable = () => {
  const [checkList, setCheckList] = useState<CheckList>({
    isUserCheck: true,
    isPostCheck: false,
  });

  return (
    <>
      <div
        className="btn-group"
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
          onClick={() =>
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
          onClick={() =>
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
    </>
  );
};
