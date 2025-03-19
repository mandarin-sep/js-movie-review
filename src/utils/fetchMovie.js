const fetchMovie = async (page) => {
  try {
    const API_URL = `https://api.themoviedb.org/3/movie/popular?page=${page}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("영화 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
};
