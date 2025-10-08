import React from 'react';
import { NavLink } from 'react-router-dom';

export function StoryPage() {
  return (
    <main className="container-fluid text-center">
      <div className="container-fluid mx-auto" style={{maxWidth: '800px', padding: '20px'}}>
            <div id="story" className="mx-auto text-center" style={{padding: '20px'}}>
                <h2>Story Title</h2>
                <h4>By Author</h4>
                <p>Story premise and original context ideas
                    (saved in database)
                </p>
            </div>
            <div>
                <h4>Idea #1 Title</h4>
                <p>Idea text (saved in database, updated by websocket)</p>
            </div>
            <div>
                <h4>Idea #2 Title</h4>
                <p>Idea text (saved in database, updated by websocket)</p>
            </div>
        </div>
        <div className="container-fluid text-center my-4">
            <NavLink to="/contribute" className="btn btn-outline-dark btn-md fw-bold px-5 py-3">
                Contribute
            </NavLink>
        </div>
    </main>
  );
}