import React from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateStory({stories, setStories, userName}) {
  const [title, setTitle] = React.useState('');
  const [premise, setPremise] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const authorName = userName;
    const newId = stories.length > 0 ? stories[stories.length - 1].id + 1 : 1;
    const newStory = {
      id: newId,
      title,
      author: userName,
      premise,
      ideas: [],
    };

    setStories([...stories, newStory]);
    localStorage.setItem('stories', JSON.stringify([...stories, newStory]));
    navigate(`/storyPage/${newId}`);
  };

  return (
    <main className="container-fluid text-center">
      <form onSubmit={handleSubmit} className="text-center container-fluid">
            <div>
            <a href="https://lordicon.com/">Select icon</a>
            <p>^Placeholder to use API to select icon for story</p>
            </div>
            <div className="input-group mb-3">
            <input className="mx-auto" style={{width: '300px'}} type="text" placeholder="Story Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="input-group mb-3">
            <input className="mx-auto" style={{width: '300px'}} type="text" placeholder="Story Premise" value={premise} onChange={(e) => setPremise(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-outline-dark">Post</button>
        </form>
    </main>
  );
}