import { put, call, debounce } from "redux-saga/effects";
import { setSearchData } from "../actions/actionCreator";
import { handleSearchQuery } from "../../utils";
import { ESearchActionTypes, TLoadedItemProps } from "../reducers/search";

type TAction = {
  type: string;
  payload: { query: string };
};

function* changeSearchSage(action: TAction) {
  const data: TLoadedItemProps[] = yield call(
    handleSearchQuery,
    action.payload.query
  );
  yield put(setSearchData(data));
}

export default function* rootSaga() {
  yield debounce(500, ESearchActionTypes.SET_SEARCH_QUERY, changeSearchSage);
}
