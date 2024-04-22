import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import apps from "../../challenges";
import { usePageBottom } from '../../customHooks';
import { FaArrowUp } from 'react-icons/fa';

const Card = styled.div`
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 10px;
  margin: 18px;
`;

const Title = styled.h3`
  color: var(--primary-color);
  padding: 20px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--border-color);
  flex-wrap: wrap;
  a {
    margin-left: 20px;
  }
`;

const AppList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Tag = styled.span`
  background-color: var(--primary-color);
  color: var(--border-color);
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 4px;
`;

const AppItem = styled(Link)`
  border: 2px solid var(--border-color);
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  max-width: 680px;
  margin: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.3s ease; 
  cursor: pointer;

  &:hover {
    border: 2px solid var(--hover-color);
  }
`;

const AppInfo = styled.div`
  display: flex;
  align-items: center;
`;

const AppData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const TagList = styled.div`
  display: flex;
`;

const TagItem = styled(Tag)`
  margin-right: 4px;
`;

const FabButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #214360;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: #0d47a1;
  }
`;

const Main = () => {
  const [showFab, setShowFab] = useState(false);
  const reachedBottom = usePageBottom();

  useEffect(() => {
    setShowFab(reachedBottom);
  }, [reachedBottom]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Card>
      <ToastContainer />
      <Title>Challenges from <a href="https://reactchallenges.live">reactchallenges</a></Title>
      <AppList>
        {apps.map((app, index) => (
          <AppItem to={app.link} key={index}>
            <AppInfo>
              <AppData>
                <span className="appName">{app.name}</span>
                <span className="appDescription">{app.description}</span>
              </AppData>
            </AppInfo>
            <TagList>
              {app.tags.map((tag, tagIndex) => (
                <TagItem key={tagIndex}>{tag}</TagItem>
              ))}
            </TagList>
          </AppItem>
        ))}
      </AppList>
      {showFab &&
        <FabButton onClick={scrollToTop}>
          <FaArrowUp />
        </FabButton>
      }
    </Card>
  );
};

export default Main;
