import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
      }
    }
    getMovies();
  }, []);

  return (
    <main>
      {error && <p>Something went wrong, please reload the page...</p>}
      <MoviesList movies={movies} />
    </main>
  );
};
