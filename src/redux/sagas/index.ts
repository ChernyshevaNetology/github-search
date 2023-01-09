import { take, put, spawn, call, debounce } from "redux-saga/effects";
import {
  SET_SEARCH_QUERY,
  setSearchData,
  setSearchQuery,
} from "../actions/actionCreator";
import { handleSearchQuery } from "../../utils";

function* changeSearchSage(action: any) {
  // @ts-ignore
  yield setSearchQuery(action.payload.query);
  // @ts-ignore
  const data = yield handleSearchQuery(action.payload.query);
  // @ts-ignore
  return yield put(setSearchData(data));
}

export default function* rootSaga() {
  yield debounce(500, SET_SEARCH_QUERY, changeSearchSage);
}
