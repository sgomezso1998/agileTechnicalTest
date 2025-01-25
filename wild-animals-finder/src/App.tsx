import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.tsx';
import Home from './screens/Home/Home.tsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
