import {
  SET_SEARCH_QUERY,
  SET_SEARCH_DATA,
  SET_IS_LOADING,
} from "../actions/actionCreator";

export type TLoadedItemProps =
  | {
      img?: string;
      url?: string;
      login?: string;
    }
  | {
      id: number;
    };

const initialLoadData = [...new Array(20).keys()].map((e) => ({
  id: e,
}));

export type TState = {
  query: string;
  data: TLoadedItemProps[];
  isLoading: boolean;
  appReady: boolean;
};

const initialState: TState = {
  query: "",
  data: initialLoadData,
  isLoading: false,
  appReady: false,
};

export interface IRootState {
  search: TState;
}

const search = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        isLoading: true,
        query: payload.query,
        appReady: false,
      };
    case SET_IS_LOADING:
      return { ...state, isLoading: payload.isLoading, appReady: false };
    case SET_SEARCH_DATA:
      return { ...state, data: payload.data, isLoading: false, appReady: true };
    default:
      return state;
  }
};

export default search;
