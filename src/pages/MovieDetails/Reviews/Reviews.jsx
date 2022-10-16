import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/fetchAPI';
import ReviewCard from 'components/ReviewCard/ReviewCard';
import { List, Text } from 'pages/MovieDetails/Reviews/Reviews.styled'

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    API.getReviews(movieId).then(r => setReviews(r));
  }, [movieId]);

  return (
    <>
      <List>
        {reviews?.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </List>
      {reviews?.length === 0 && (
        <Text>We don`t have any reviews for this movies</Text>
      )}
    </>
  );
};

export default Reviews;