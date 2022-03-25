import logo from './logo.svg';
import './App.css';
import useAccessToken from './hooks/useAccessToken';
import useAxios from './hooks/useAxios';

function App() {

 useAccessToken();
 const [responseValue]=useAxios('https://api.igdb.com/v4/games');//to fetch games list


  return (
    <div className="App">


      
    </div>
  );
}

export default App;
