import { styled } from './styles';

const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.default};
  background-color: ${({ theme }) => theme.colors.ignite500};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[4]};

  border: 0;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export function App() {
  return <Button>Hello World</Button>;
}
