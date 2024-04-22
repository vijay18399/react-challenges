import styled, { keyframes } from 'styled-components';
import { useFetch } from '../customHooks';
import Loader from '../components/Loader';

const ShibeContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const ErrorMessage = styled.div`
  color: #e53935;
  font-size: 18px;
  margin-bottom: 20px;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageContainer = styled.div`
     margin: 10px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    height: 100%;
    box-shadow: -9px 13px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 200px;
  border-radius: 20px;
  transition: opacity 0.3s ease-in-out;
`;

const RetryButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ffb74d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff9800;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoaderWrapper = styled.div`
  animation: ${fadeIn} 0.5s ease;
`;

const ShibeApp = () => {
  const { data, loading, error, refetch } = useFetch(`https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true`);
  
  if (loading) {
    return (
      <ShibeContainer>
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      </ShibeContainer>
    );
  }
  
  if (error) {
    return (
      <ShibeContainer>
        <ErrorMessage>Error: {error}</ErrorMessage>
        <RetryButton onClick={refetch}>Retry</RetryButton>
      </ShibeContainer>
    );
  }

  return (
    <ShibeContainer>
      <h1>Random Shibe Pictures</h1>
      <ImageGrid>
        {data.map((imageUrl, index) => (
          <ImageContainer key={index}>
            <Image
              loading="lazy" 
              src={imageUrl}
              alt={`Shibe ${index}`}
              onError={(e) => (e.target.style.display = 'none')}
            />
          </ImageContainer>
        ))}
      </ImageGrid>
    </ShibeContainer>
  );
};

export default ShibeApp;
