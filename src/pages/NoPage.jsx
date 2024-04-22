import styled from 'styled-components';
import { TbError404 } from "react-icons/tb";
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Icon = styled(TbError404)`
  font-size: 48px;
  margin-bottom: 20px;
  color: #FF0707; 
`;

const Text = styled.p`
  font-size: 24px;
  color: #333; 
`;

export default function NoPage() {
  const location = useLocation();
  const route = location.pathname;

  return (
    <Container>
      <Icon />
      <Text>Page Not Found  : {route}</Text>
    </Container>
  );
};
