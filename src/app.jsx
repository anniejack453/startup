import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Browse } from './browse/browse';
import { Contribute } from './contribute/contribute';
import { CreateStory } from './createStory/createStory';
import { Home } from './home/home';
import { StoryPage } from './storyPage/storyPage';
import { AuthState } from './login/authState';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);  
  return (
    <BrowserRouter>
        <div className="body">
            <header className="container-fluid">
                <nav className="navbar fixed-top navbar-purple d-flex justify-content-between">
                    <h1>StoryTogether</h1>
                    <menu className="navbar-nav d-flex flex-row">
                    {authState === AuthState.Authenticated && (
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">
                            Home
                        </NavLink>
                    </li>
                    )}
                    {authState === AuthState.Authenticated && (
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/browse">
                            Browse
                        </NavLink>
                    </li>
                    )}
                    <li className="nav-item">
                    </li>
                    </menu>
                    {authState === AuthState.Authenticated && (
                        <div className="d-flex align-items-center ms-auto" style={{paddingRight: '20px'}}>
                        <span className="me-3 fw-semibold" id="username">Username</span>
                        <NavLink className="btn btn-outline-dark btn-md fw-bold px-5 py-3" to="/createStory">
                            Create Your Story
                        </NavLink>
                        </div>
                    )}
                </nav>
            </header>

            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/browse' element={<Browse />} />
                <Route path='/contribute' element={<Contribute />} />
                <Route path='/createStory' element={<CreateStory />} />
                <Route path='/storyPage' element={<StoryPage />} />
                <Route path='*' element={<NotFound />} />
                <Route
                    path='/'
                    element={
                    <Login
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                        setAuthState(authState);
                        setUserName(userName);
                        }}
                    />
                    }
                    exact
                />
            </Routes>

            <footer>
                <div className="container-fluid">
                    <span className="text-reset">Anna Egbert</span>
                    <a className="text-reset" href="https://github.com/anniejack453/startup">GitHub</a>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

export default App;