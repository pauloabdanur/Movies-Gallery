import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { Button, Container, Input, NavForm, Title } from './styles';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <Container>
      <Title>
        <Link to="/Movies-Gallery">
          <BiCameraMovie /> Movies Lib
        </Link>
      </Title>
      <NavForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button type="submit">
          <BiSearchAlt2 />
        </Button>
      </NavForm>
    </Container>
  );
};

export default Navbar;
