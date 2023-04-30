import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Blog/Pages/HomePage';
import LoginPage from './Blog/Pages/LoginPage';
import RegisterPage from './Blog/Pages/RegisterPage';
import ProfilePage from './Blog/Pages/ProfilePage';
import EditProfile from './Blog/Pages/EditProfile';
import SearchPage from './Blog/Pages/SearchPage';
import CreatePostPage from './Blog/Pages/CreatePostPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './Blog/Components/Auth/Protected';
import Anonymous from './Blog/Components/Auth/Anonymous ';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
    <Routes>
      <Route element={<Protected />}> 
        <Route path="/profile" element={<ProfilePage /> } />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/createPost" element={<CreatePostPage />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/home" element={<HomePage />  } />
      </Route>
    
      <Route element={<Anonymous />}>
        <Route path='/' exact element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  </BrowserRouter>

);

reportWebVitals();
