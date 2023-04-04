import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import { IMovie } from '../../types/IMovie';
import { Container, Title, MoviesContainer, QueryText } from './styles';

const searchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = 'api_key=f3f872ee96c337d1b0a4354e41a266ed';

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState<IMovie[]>([]);
  const query = searchParams.get('q');

  const getSearchedMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    console.log(searchWithQueryURL);

    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  console.log(movies);

  return (
    <Container>
      <Title>
        Resultados para:{' '}
        <div>
          <QueryText>{query}</QueryText>
        </div>
      </Title>
      <MoviesContainer>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie: IMovie) => (
            <MovieCard key={movie.id} movie={movie} showLink={true} />
          ))}
      </MoviesContainer>
    </Container>
  );
};

export default Search;
