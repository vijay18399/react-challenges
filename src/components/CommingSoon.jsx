import styled from 'styled-components';
import { FaRegLightbulb } from 'react-icons/fa'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Icon = styled(FaRegLightbulb)`
  font-size: 48px;
  margin-bottom: 20px;
  color: #ffc107; /* Yellow color */
`;

const Text = styled.p`
  font-size: 24px;
  color: #333; /* Dark gray color */
`;

export default function CommingSoon({name}) {
  return (
    <Container>
      <Icon />
      <Text>Coming Soon {name}</Text>
    </Container>
  );
};
