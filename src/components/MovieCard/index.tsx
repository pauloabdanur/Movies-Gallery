import {
  Container,
  Image,
  MovieTitle,
  MyFaStar,
  MyLink,
  Rating,
} from './styles';
import { IMovie } from '../../types/IMovie';

const imageURL = process.env.REACT_APP_IMG as string;

type Props = {
  movie: IMovie;
  showLink: boolean;
  children?: React.ReactNode;
  alignItems?: string;
  singular?: boolean;
};

const MovieCard = ({ movie, showLink, children, singular }: Props) => {
  return (
    <Container singular={singular}>
      <Image src={imageURL + movie.poster_path} alt={movie.title} />
      <MovieTitle singular={singular}>{movie.title}</MovieTitle>
      <Rating singular={singular}>
        <MyFaStar /> {movie.vote_average}
      </Rating>
      {showLink && <MyLink to={`/movie/${movie.id}`}>Detalhes</MyLink>}
      {children}
    </Container>
  );
};

export default MovieCard;
