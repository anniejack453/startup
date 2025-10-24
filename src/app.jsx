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

  const [stories, setStories] = React.useState(() => {
    const saved = localStorage.getItem('stories');
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: 'Story Title',
            author: 'Author',
            premise: 'Story premise and original context ideas (saved in database)',
            ideas: [
              { title: 'Idea #1 Title', text: 'Idea text (saved in database, updated by websocket)' },
              { title: 'Idea #2 Title', text: 'Idea text (saved in database, updated by websocket)' },
            ],
          },
        ];
  });

  React.useEffect(() => {
    localStorage.setItem('stories', JSON.stringify(stories));
  }, [stories]);

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
                        <span className="me-3 fw-semibold" id="username">{userName ? `${userName}` : ""}</span>
                        <NavLink className="btn btn-outline-dark btn-md fw-bold px-5 py-3" to="/createStory">
                            Create Your Story
                        </NavLink>
                        </div>
                    )}
                </nav>
            </header>

            <Routes>
                <Route path='/home' element={<Home userName={userName} />} />
                <Route path='/browse' element={<Browse userName={userName}/>} />
                <Route path='/contribute/:id' element={<Contribute stories={stories} setStories={setStories}/>} />
                <Route path='/createStory' element={<CreateStory stories={stories} setStories={setStories} userName={userName}/>} />
                <Route path='/storyPage/:id' element={<StoryPage stories={stories} setStories={setStories} />} />
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