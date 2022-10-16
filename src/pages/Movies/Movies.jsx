import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from 'services/fetchAPI';
import FilmList from 'components/FilmList/FilmList';
import { SearchForm, FormButton, FormInput } from 'pages/Movies/Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const inputForm = useRef();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query === '') {
      setMovies([])
      return
    }
    if (!query) {
      setMovies(null)
      inputForm.current.reset();
      return
    }
    if (query) {
      inputForm.current.value = query;
      API.getMovies(query).then(setMovies);
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.search.value });
  };

  return (
    <>
    <SearchForm action="" ref={inputForm} onSubmit={handleSubmit}>
      <FormInput
        name="search"
        type="text"
        autocomplete="off"
        placeholder="Search movies"
      />
      <FormButton type="submit">Search</FormButton>
    </SearchForm>
    {movies && <FilmList movies={movies} />}
    {movies?.length === 0 && <p style={{textAlign: 'center'}}>Nothing found</p>}
    </>
  );
};

export default Movies;
