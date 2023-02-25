import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Container = styled.div<{ singular?: boolean }>`
  width: ${(props) => (props.singular ? '100%' : '30%')};
  color: #fff;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => (props.singular ? '' : '#111')};
  padding: 1rem;
`;

export const Image = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
`;

export const MovieTitle = styled.h2<{ singular?: boolean }>`
  margin-bottom: 1rem;
  text-align: ${(props) => (props.singular ? 'center' : '')};
  font-size: ${(props) => (props.singular ? '2rem' : '')};
`;

export const Rating = styled.p<{ singular?: boolean }>`
  margin-bottom: 1.5rem;
  text-align: ${(props) => (props.singular ? 'center' : '')};
`;

export const MyFaStar = styled(FaStar)`
  color: #f7d354;
`;

export const MyLink = styled(Link)`
  background-color: #f7d354;
  border: 2px solid #f7d354;
  border-radius: 4px;
  color: #000;
  padding: 1rem 0.5rem;
  align-items: center;
  transition: 0.4s;
  text-align: center;
  font-weight: bold;

  &:hover {
    background-color: transparent;
    color: #f7d354;
  }
`;
