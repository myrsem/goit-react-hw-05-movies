import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/fetchAPI';
import CastCard from 'components/CastCard/CastCard';
import { List } from 'pages/MovieDetails/Cast/Cast.styled'

const Cast = () => {
  const [cast, setCast] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    API.getCast(movieId).then(r => setCast(r));
  }, [movieId]);

  return (
    <List>
      {cast?.map((oneCast, index) => (
        <CastCard key={index} oneCast={oneCast} />
      ))}
    </List>
  );
};

export default Cast;