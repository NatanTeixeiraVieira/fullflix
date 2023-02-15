const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b';
const API_BASE = 'https://api.themoviedb.org/3';

const languageAndKey = `language=pt-BR&api_key=${API_KEY}`;

const request = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => [
    {
      slug: 'originals',
      title: 'Originais da Fullflix',
      items: await request(`/discover/tv?with_network=213&${languageAndKey}`),
    },
    {
      slug: 'trending',
      title: 'Recomendados para você',
      items: await request(`/trending/all/week?${languageAndKey}`),
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      items: await request(`/movie/top_rated?${languageAndKey}`),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await request(`/discover/movie?with_genres=28&${languageAndKey}`),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await request(`/discover/movie?with_genres=35&${languageAndKey}`),
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await request(`/discover/movie?with_genres=27&${languageAndKey}`),
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await request(`/discover/movie?with_genres=10749&${languageAndKey}`),
    },
    {
      slug: 'documentary',
      title: 'Documentário',
      items: await request(`/discover/movie?with_genres=99&${languageAndKey}`),
    },
  ],
};
