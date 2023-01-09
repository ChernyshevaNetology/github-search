import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "./redux/reducerts/search";
import "./App.css";
import { SET_SEARCH_QUERY } from "./redux/actions/actionCreator";
import { ItemImage } from "./components/itemImage";

const App = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: IRootState) => state.search.query);
  const data = useSelector((state: IRootState) => state.search.data);

  const onChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SET_SEARCH_QUERY,
      payload: { query: event.target.value },
    });
  };

  return (
    <>
      <div className={"app"}>
        <input
          value={query}
          onChange={onChangeQuery}
          className={"input"}
          type={"text"}
          placeholder={"search a github user"}
        />

        <div className="items">
          {data &&
            data.map((item: any) => (
              <ItemImage
                key={item.url}
                img={item.img}
                url={item.url}
                login={item.login}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
