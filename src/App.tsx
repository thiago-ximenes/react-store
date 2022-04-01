import styled from 'styled-components';
import './App.css';

const App : React.FC = () => {
  const Title = styled.h1`
    color: red;
    text-align: center;
  `;

  return (
    <Title>
      Start Project
    </Title>
  );
};

export default App;
