import React, { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ESearchActionTypes,
  IRootState,
  TLoadedItemProps,
} from "./redux/reducers/search";
import "./App.css";
import { ItemImage } from "./components/ItemImage";

const App = () => {
  const id = useId();
  const dispatch = useDispatch();
  const query = useSelector((state: IRootState) => state.search.query);
  const data = useSelector((state: IRootState) => state.search.data);

  const onChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ESearchActionTypes.SET_SEARCH_QUERY,
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
          {data?.length > 0 &&
            data.map((item: TLoadedItemProps, i) => (
              <ItemImage
                key={id + i}
                img={item?.img}
                url={item?.url}
                login={item?.login}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
