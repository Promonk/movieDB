import { useState } from 'react';
import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
import './App.css';

function App() {

const [darkMode, setDarkMode] = useState<boolean>(true);

const togggleDarkMode = () => {
  document.body.className = darkMode ? "light-mode" : "dark-mode";
  setDarkMode((prevState: boolean) => !prevState);
}

  return (
    <>
    <div className={darkMode ? "App dark" : "App"}>
      <div className=" dark:bg-gray-950">
        <Header togggleDarkMode={togggleDarkMode}/>
          <AllRoutes />
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
