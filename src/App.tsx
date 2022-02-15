import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import { ContextWrapper } from './utils';
import { Home } from './Components/Home/Home';
import { SocialRedirects } from 'Components/SocialRedirects';

const App: FC = () => {
  return (
    <ContextWrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/socials'>
          <Route path={':socialAccount'} element={<SocialRedirects />} />
        </Route>
        <Route path='*' element={<Navigate replace to={'/'} />} />
      </Routes>
    </ContextWrapper>
  );
};

export default App;
