import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';

const Routers: React.FC = () => (
  <Routes>
    <Route path="/" element={ <Home /> } />
  </Routes>
);

export default Routers;
