export const handleSearchQuery = async (query: string): Promise<void> => {
  if (query.length < 1) {
    return;
  }

  try {
    const data = await fetch(
      `${process.env.REACT_APP_SEARCH_URL}?q=${query}&per_page=30`
    );
    const json = await data.json();
    return json.items.map((repo: any) => ({
      img: repo.avatar_url,
      url: repo.html_url,
      login: repo.login,
    }));
  } catch (err) {
    console.warn(err);
  }
};
