import { useEffect, useState } from 'react';
import * as API from 'services/fetchAPI';
import FilmList from 'components/FilmList/FilmList';
import { Title } from 'pages/Home/Home.styled'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    API.getTrendingMovies().then(r => setTrendingMovies(r));
  }, []);

    return (
      <main>
        <Title>Trending today</Title>
        {trendingMovies && <FilmList movies={trendingMovies} />}
      </main>
    );
  };

export default Home