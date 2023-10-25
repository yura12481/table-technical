import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInPage from './pages/auth/SignInPage';
import HomePage from './pages/home/HomePage';
import NotFound from './pages/notFound/NotFound';
import PrivateRoute from './utils/privateRoute/PrivateRoute';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<SignInPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
