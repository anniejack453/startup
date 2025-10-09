import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Contribute() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/storyPage');
  };

  return (
    <main className="container-fluid text-center">
      <form onSubmit={handleSubmit} className="text-center container-fluid">
            <div className="input-group mb-3">
            <input className="mx-auto" style={{width: '300px'}} type="text" placeholder="Title" />
            </div>
            <div className="input-group mb-3">
            <input className="mx-auto" style={{width: '300px'}} type="text" placeholder="Story Suggestion" />
            </div>
            <button type="submit" className="btn btn-outline-dark">Post</button>
        </form>
    </main>
  );
}