import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { CardWrapper, Container, ProductName } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(({ title, backdrop_path, id }) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                backdrop_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`
                  : 'https://via.placeholder.com/220x330'
              }
              alt={title}
            />
            <ProductName>{title}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
