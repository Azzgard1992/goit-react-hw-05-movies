import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieInfoById } from 'service/api';
import { AddInfo, MovieInfo, Wrapper, AddLink } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoader(true);
        const movieDetails = await getMovieInfoById(moviesId);
        setMovie(movieDetails);
      } catch (error) {
        // console.log(error);
        setError(error);
      } finally {
        setIsLoader(false);
      }
    }
    getMovie();
  }, [moviesId]);

  if (!movie) return null;

  const { title, poster_path, genres, overview, release_date, runtime } = movie;

  return (
    <>
      {error && <p>Something went wrong, please reload the page...</p>}
      <main>
        {isLoader && <Loader />}
        <Link to={backLinkHref}>
          <Button>Go back</Button>
        </Link>

        <Wrapper>
          <div>
            <img
              src={
                poster_path
                  ? `https://www.themoviedb.org/t/p/w300_and_h450_face/${poster_path}`
                  : 'https://via.placeholder.com/220x330'
              }
              alt={title}
            />
          </div>
          <MovieInfo>
            <h2>
              {title}({release_date.slice(0, 4)})
            </h2>
            <p>
              <b>Runtime:</b> {runtime}m
            </p>
            <b>Ganres:</b>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <b>Overview:</b>
            <p>{overview}</p>
          </MovieInfo>
        </Wrapper>
        <AddInfo>
          <h2>Additional Information:</h2>
          <AddLink to="cast" state={location.state}>
            Cast
          </AddLink>

          <AddLink to="reviews" state={location.state}>
            Reviews
          </AddLink>
        </AddInfo>

        <Outlet />
      </main>
    </>
  );
};
