import { Link, useLocation } from 'react-router-dom';
import { List, Item, Img, Text } from 'components/FilmList/FilmList.styled';
import PropTypes from 'prop-types';

const FilmList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies?.map(({ id, title, poster_path }) => {
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img src={poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : 'https://fr.web.img6.acsta.net/c_310_420/pictures/210/298/21029875_2013082116404994.jpg'} alt="poster of cinema"/>
              <Text>{title}</Text>
              </Link>
            </Item>
          );
        })}
      </List>
    </div>
  );
}

export default FilmList;

FilmList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};