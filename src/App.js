import React,{useEffect,useState} from 'react';
import './App.css';
import SplashScreen from './SplashScreen';
import Main from './Main';

function App() {
  const [timer, settimer] = useState(0)
  console.log(timer)
  useEffect(() => {
    setTimeout(function(){  
      settimer(2)
    console.log(timer) 
  }, 4000);
    
  }, [])  

  let tag = timer===2 ? <Main/> : <SplashScreen />
  return ( 
    <div className="App">
      {tag}
    </div>
  )
}

export default App;
