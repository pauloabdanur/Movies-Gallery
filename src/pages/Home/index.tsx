import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import { IMovie } from '../../types/IMovie';
import { Container, MoviesContainer, Title } from './styles';

const moviesURL = process.env.REACT_APP_API as string;
const apiKey = process.env.REACT_APP_API_KEY as string;

const Home = () => {
  const [topMovies, setTopMovies] = useState<IMovie[]>([]);

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <Container>
      <Title>Melhores Filmes</Title>
      <MoviesContainer>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie: IMovie) => (
            <MovieCard key={movie.id} movie={movie} showLink={true} />
          ))}
      </MoviesContainer>
    </Container>
  );
};

export default Home;
