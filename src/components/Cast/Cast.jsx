import { Box } from 'components/Box/Box';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfoById } from 'service/api';
import { CardWrapper, Container } from './Cast.styled';

export const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoader(true);
        const { cast } = await getCastInfoById(moviesId);
        setCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    }
    getCast();
  }, [moviesId]);

  return (
    <Box mt="4">
      {error && <p>Something went wrong, please reload the page...</p>}
      {isLoader && <Loader />}
      <Container>
        {cast.map(({ character, name, profile_path, id }) => (
          <CardWrapper key={id}>
            <img
              src={
                profile_path
                  ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
                  : 'https://via.placeholder.com/138x175'
              }
              alt={name}
            />
            <p>
              <b>Name:</b> {name}
            </p>
            <p>
              <b>Character:</b> {character}
            </p>
          </CardWrapper>
        ))}
      </Container>
    </Box>
  );
};
