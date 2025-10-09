import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
  return (
    <main className="container-fluid p-0 text-center">
        <div id="picture" className="picture-box"><img className="img-fluid w-100" src="scenery-art-wallpaper.jpg" alt="random" /></div>
        <div>
            <h1>Let's tell a story, together</h1>
            <form method="get" action="home.html">
                <div className="input-group mb-3">
                    <span className="input-group-text">Email:</span>
                    <input className="form-control" type="text" placeholder="your@email.com" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password:</span>
                    <input className="form-control" type="password" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="submit" className="btn btn-secondary">Create</button>
            </form>
        </div>
    </main>
  );
}