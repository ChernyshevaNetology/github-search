export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_SEARCH_DATA = "SET_SEARCH_DATA";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_APP_READY = "SET_APP_READY";

export const setIsLoading = (loading: boolean) => ({
  type: SET_IS_LOADING,
  payload: { loading },
});

export const setAppReady = (appReady: boolean) => ({
  type: SET_APP_READY,
  payload: { appReady },
});

export const setSearchQuery = (query: string) => ({
  type: SET_SEARCH_QUERY,
  payload: { query },
});

export const setSearchData = (data: any) => ({
  type: SET_SEARCH_DATA,
  payload: { data },
});
