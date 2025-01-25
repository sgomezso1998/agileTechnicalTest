// routes.tsx
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home.tsx';
import Results from './screens/Results/Results.tsx';
import RoutesPath from './Router.ts';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={RoutesPath.home} />} /> 
      <Route path={RoutesPath.home} element={<Home title="Inicio" />} />
      <Route path={RoutesPath.results} element={<Results/>} />
    </Routes>
  );
};

export default Router;
