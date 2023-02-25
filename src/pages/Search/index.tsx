import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import { IMovie } from '../../types/Movie';
import { Container, Title, MoviesContainer, QueryText } from './styles';

const searchURL = process.env.REACT_APP_SEARCH as string;
const apiKey = process.env.REACT_APP_API_KEY as string;

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
