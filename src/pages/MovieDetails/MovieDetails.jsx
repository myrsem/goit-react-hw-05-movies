import { useState, useEffect, Suspense, lazy } from 'react';
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import * as API from 'services/fetchAPI';

import {
  Container,
  Button,
  ButtonLabel,
  List,
  Item,
  Text,
  LinkWrapper,
  Links,
} from 'pages/MovieDetails/MovieDetails.styled';

const Cast = lazy(() => import('pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('pages/MovieDetails/Reviews/Reviews'));

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [buttonLocation, setButtonLocation] = useState(null);
  let { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    API.getOneMovie(movieId).then(r => setMovie(r));
  }, [movieId]);

  useEffect(() => {
    if (location?.state?.from) {
      setButtonLocation(location.state.from);
    }
  }, [location?.state?.from]);

  return (
    movie && (
      <>
        <Button
          type="button"
          onClick={() => { 
            navigate(buttonLocation || '/goit-react-hw-05-movies');
          }}
        >
          <span>
            <ButtonLabel />
          </span>
          Go back
        </Button>
        <Container>
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt=""
          />
          <List>
            <Item>
              <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
              <Text>{`User Score: ${Math.round(parseFloat(movie.vote_average) * 100) / 10}%`} </Text>
            </Item>
            <Item>
              <h3>Overview</h3>
              <Text>{movie.overview}</Text>
            </Item>
            <Item>
              <h3>Genres</h3>
              <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
            </Item>
          </List>
        </Container>
        <LinkWrapper>
          <h3>Additional information</h3>
          <Links to="cast">Cast</Links>
          <Links to="reviews">Reviews</Links>
        </LinkWrapper>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};

export default MovieDetails;
