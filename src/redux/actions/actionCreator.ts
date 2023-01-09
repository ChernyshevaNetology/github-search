import { TLoadedItemProps, ESearchActionTypes } from "../reducers/search";

export const setIsLoading = (loading: boolean) => ({
  type: ESearchActionTypes.SET_IS_LOADING,
  payload: { loading },
});

export const setSearchQuery = (query: string) => ({
  type: ESearchActionTypes.SET_SEARCH_QUERY,
  payload: { query },
});

export const setSearchData = (data: TLoadedItemProps[]) => ({
  type: ESearchActionTypes.SET_SEARCH_DATA,
  payload: { data },
});
