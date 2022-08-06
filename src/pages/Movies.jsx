import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'service/api';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!filter.trim()) return;
    async function getMovies() {
      try {
        setIsLoader(true);
        const { results } = await getMoviesByQuery(filter);
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    }
    getMovies();
  }, [filter]);

  console.log(error);

  const changeFilter = moviesName => {
    setSearchParams(moviesName !== '' ? { query: moviesName } : {});
  };

  const shouldRenderMoviesList = movies.length > 0;

  return (
    <main>
      <SearchBox value={filter} onChange={changeFilter} />
      {error && <p>Something went wrong, please reload the page...</p>}
      {isLoader && <Loader />}
      {shouldRenderMoviesList && <MoviesList movies={movies} />}
      {movies.length <= 0 && filter !== '' && (
        <p>Nothing found for your request.</p>
      )}
    </main>
  );
};
