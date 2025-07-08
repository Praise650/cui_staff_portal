import { lazy } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import Login from "./pages/login";

import './App.css'

//dasboard dashboard routes 
import Home from "./pages/home"
import routes from './routes/dashboard_routes';

const DefaultLayout = lazy(() => import('./layout'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<DefaultLayout />}>
          <Route path='/home' element={<Home />} />
          {routes.map((item, index) => {
            const { path, component: Component } = routes[index];
            return (
              <Route
                key={index}
                path={path}
                element={<Component />}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
