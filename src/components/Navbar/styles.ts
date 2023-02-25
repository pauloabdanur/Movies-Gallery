import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NavForm = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  border: none;
`;

export const Button = styled.button`
  background-color: #f7d354;
  border: 2px solid #f7d354;
  border-radius: 4px;
  color: #000;
  padding: 0.3rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: transparent;
    color: #f7d354;
  }
`;
