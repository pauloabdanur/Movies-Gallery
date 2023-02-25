import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieCard from '../../components/MovieCard';
import { IMovie } from '../../types/IMovie';
import {
  Container,
  Description,
  Icon,
  Info,
  MyBsFillFileEarmarkTextFill,
  MyBsGraphUp,
  MyBsHourglassSplit,
  MyBsWallet2,
  TagLine,
  Text,
} from './styles';

const moviesURL = process.env.REACT_APP_API as string;
const apiKey = process.env.REACT_APP_API_KEY as string;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  const getMovie = async (url: string) => {
    const res = await fetch(url);
    const data = (await res.json()) as IMovie;

    setMovie(data);
  };

  const formatCurrency = (num: number) => {
    return num.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;

    getMovie(movieURL);
  }, []);

  return (
    <Container>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} singular={true}>
            <TagLine>{movie.tagline}</TagLine>
            <Info>
              <Icon>
                <MyBsWallet2 /> Orçamento:
              </Icon>
              <Text>{formatCurrency(movie.budget)}</Text>
            </Info>
            <Info>
              <Icon>
                <MyBsGraphUp /> Receita:
              </Icon>
              <Text>{formatCurrency(movie.revenue)}</Text>
            </Info>
            <Info>
              <Icon>
                <MyBsHourglassSplit /> Duração:
              </Icon>
              <Text>{movie.runtime} minutos</Text>
            </Info>
            <Info>
              <Icon>
                <MyBsFillFileEarmarkTextFill /> Descrição:
              </Icon>
              <Description>{movie.overview}</Description>
            </Info>
          </MovieCard>
        </>
      )}
    </Container>
  );
};

export default Movie;
