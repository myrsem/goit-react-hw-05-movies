import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Header, Link } from 'components/App.styled';

const Home = lazy(() => import ('pages/Home/Home'));
const Movies = lazy(() => import ('pages/Movies/Movies'));
const MovieDetails = lazy(() => import ('pages/MovieDetails/MovieDetails'));
const NotFoundPage = lazy(() => import ('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/goit-react-hw-05-movies" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </Container>
  );
};
