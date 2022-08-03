import { getReviewsInfoById } from 'service/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/Box/Box';

export const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoader(true);
        const { results } = await getReviewsInfoById(moviesId);
        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    }
    getCast();
  }, [moviesId]);

  const shouldRenderReviews = reviews.length > 0;

  return (
    <Box mt="4">
      {error && <p>Something went wrong, please reload the page...</p>}
      {isLoader && <Loader />}
      {shouldRenderReviews ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <b>Autorname: {author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews for this film yet.</p>
      )}
    </Box>
  );
};
