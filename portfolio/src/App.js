import React, {useState} from 'react';
import Home from "./Home/Home";
import NavMenu from "./Menu/NavMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [navVisible, showNavMenu] = useState(false);

  return (
    <div>
      <BrowserRouter>
      <NavMenu visible={ navVisible } show={ showNavMenu } />
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
