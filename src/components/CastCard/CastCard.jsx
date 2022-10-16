import { Text } from 'components/CastCard/CastCard.styled'
import PropTypes from 'prop-types';

const CastCard = ({ oneCast: { name, character, profile_path } }) => {
  return (
    <li>
      <img
        width={100}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : 'https://fr.web.img6.acsta.net/c_310_420/pictures/210/298/21029875_2013082116404994.jpg'
        }
        alt="poster of cinema"
      />
      <Text>{name}</Text>
      <Text>{`Character: ${character}`}</Text>
    </li>
  );
}

CastCard.propTypes = {
  oneCast: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};

export default CastCard;