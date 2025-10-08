import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body">
        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-purple d-flex justify-content-between">
                <h1>StoryTogether</h1>
                <menu className="navbar-nav d-flex flex-row">
                <li className="nav-item">
                    <a className="nav-link" href="home.html">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="browse.html">Browse</a>
                </li>
                <li className="nav-item">
                </li>
                </menu>
                <div className="d-flex align-items-center ms-auto" style={{paddingRight: '20px'}}>
                    <span className="me-3 fw-semibold" id="username">Username</span>
                    <a className="btn btn-outline-dark btn-md fw-bold px-5 py-3" href="createStory.html">Create Your Story</a>
                </div>
            </nav>
        </header>

        <main>App components go here</main>

        <footer>
            <div className="container-fluid">
                <span className="text-reset">Anna Egbert</span>
                <a className="text-reset" href="https://github.com/anniejack453/startup">GitHub</a>
            </div>
        </footer>
    </div>
  );
}