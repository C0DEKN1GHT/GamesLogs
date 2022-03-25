import logo from './logo.svg';
import './App.css';
// import useAccessToken from './hooks/useAccessToken';
// import useAxios from './hooks/useAxios';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameList from './components/GameList';
import NavTop from './components/NavTop';

function App() {

  // useAxios();
  //  useAccessToken();
  //  const [responseValue]=useAxios();//to fetch games list
  return (
    <div style={{ backgroundColor: "#003153" }}>
      <NavTop />
      <GameList />
    </div>
  );
}

export default App;
