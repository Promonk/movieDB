import { useState } from 'react';
import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
import './App.css';

function App() {

const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <>
    <div className={darkMode ? "App dark" : "App"}>
      <div className=" dark:bg-gray-950">
        <Header setDarkMode={setDarkMode}/>
          <AllRoutes />
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
