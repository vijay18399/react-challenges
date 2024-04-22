import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  width: 80%;
  max-width: 600px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0d47a1;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    text-decoration: none;
    color: #424242;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const Icon = styled.span`
  margin-right: 8px;
`;

const HomeContainer = styled(Container)`
  background-color: #ffffff;
`;

const DetailsContainer = styled(Container)`
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const BackIcon = styled(FiArrowLeft)`
  margin-right: 8px;
`;

const BackButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <BackIcon /> Back to Home
  </Button>
);

const Home = () => (
  <HomeContainer>
    <Content>
      <h2>Home</h2>
      <p>Welcome to the URL Params Example</p>
      <h3>Student List</h3>
      <List>
        <ListItem>
          <Link to="student/Kesav">
            <Icon>👨‍🎓</Icon>
            Kesav
          </Link>
        </ListItem>
        <ListItem>
          <Link to="student/Ram">
            <Icon>👨‍🎓</Icon>
            Ram
          </Link>
        </ListItem>
        <ListItem>
          <Link to="student/John">
            <Icon>👨‍🎓</Icon>
            John
          </Link>
        </ListItem>
      </List>
      <h3> Blog Posts</h3>
      <List>
        <ListItem>
          <Link to="ids/1">
            <Icon>📝</Icon> React Basics
          </Link>
        </ListItem>
        <ListItem>
          <Link to="ids/2">
            <Icon>📝</Icon> React Challenges
          </Link>
        </ListItem>
        <ListItem>
          <Link to="ids/3">
            <Icon>📝</Icon> React Projects
          </Link>
        </ListItem>
      </List>
    </Content>
  </HomeContainer>
);

const StudentDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <DetailsContainer>
      <Content>
        <h2>Student Details</h2>
        <p>Student Name: {name}</p>
        <BackButton onClick={handleBack} />
      </Content>
    </DetailsContainer>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <DetailsContainer>
      <Content>
        <h2>Blog Post</h2>
        <p>Post ID: {id}</p>
        <BackButton onClick={handleBack} />
      </Content>
    </DetailsContainer>
  );
};

const UrlParams = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="student/:name" element={<StudentDetails />} />
    <Route path="ids/:id" element={<BlogPost />} />
  </Routes>
);

export default UrlParams;
