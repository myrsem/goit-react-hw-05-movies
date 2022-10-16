import { Text } from 'components/ReviewCard/ReviewCard.slyled'
import PropTypes from 'prop-types';

const ReviewCard = ({ review: { author, content } }) => {
  return (
    <li>
      <h3>{`Author: ${author}`}</h3>
      <Text>{content}</Text>
    </li>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default ReviewCard;