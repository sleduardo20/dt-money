import { Container } from './styles';
import Logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
    </Container>
  );
};
