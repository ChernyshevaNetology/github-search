export type TLoadedItemProps = {
  id?: number;
  img?: string;
  url?: string;
  login?: string;
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

export enum ESearchActionTypes {
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_SEARCH_DATA = "SET_SEARCH_DATA",
}

type TSetSearchQueryAction = {
  type: ESearchActionTypes.SET_SEARCH_QUERY;
  payload: { query: string };
};
type TSetIsLoadingAction = {
  type: ESearchActionTypes.SET_IS_LOADING;
  payload: { isLoading: boolean };
};
type TSearchDataAction = {
  type: ESearchActionTypes.SET_SEARCH_DATA;
  payload: { data: TLoadedItemProps[] };
};

type TSearchActions =
  | TSetSearchQueryAction
  | TSetIsLoadingAction
  | TSearchDataAction;

const search = (state = initialState, { type, payload }: TSearchActions) => {
  switch (type) {
    case ESearchActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        isLoading: true,
        query: payload.query,
        appReady: false,
      };
    case ESearchActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: payload.isLoading, appReady: false };
    case ESearchActionTypes.SET_SEARCH_DATA:
      return { ...state, data: payload.data, isLoading: false, appReady: true };
    default:
      return state;
  }
};

export default search;
