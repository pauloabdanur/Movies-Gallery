import styled from 'styled-components';
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from 'react-icons/bs';

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto;
`;

export const Description = styled.p`
  line-height: 1.4rem;
  padding-bottom: 10rem;
`;

export const Icon = styled.h3`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Info = styled.div`
  margin-bottom: 1.5rem;
`;

export const TagLine = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.3rem;
`;

export const Text = styled.p``;

export const MyBsGraphUp = styled(BsGraphUp)`
  font-size: 1rem;
  color: #f7d354;
`;
export const MyBsWallet2 = styled(BsWallet2)`
  font-size: 1rem;
  color: #f7d354;
`;
export const MyBsHourglassSplit = styled(BsHourglassSplit)`
  font-size: 1rem;
  color: #f7d354;
`;
export const MyBsFillFileEarmarkTextFill = styled(BsFillFileEarmarkTextFill)`
  font-size: 1rem;
  color: #f7d354;
`;
