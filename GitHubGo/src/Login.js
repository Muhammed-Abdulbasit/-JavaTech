import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
function App() {
  const CLIENT_ID = 'e43509bd8930071520ba';
  
  useEffect(() => {
    const querystring = window.location.search;
    const urlpara = new URLSearchParams(querystring);
    const codeparam = urlpara.get('code');
    console.log(codeparam);
  }, []);

  function loginwithgithub(){
    window.location.assign("https://github.com/login/oauth/authorize?client_id="+CLIENT_ID);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={loginwithgithub}>
          Login with github
        </button>
      </header>
    </div>
  );
}

export default App;
