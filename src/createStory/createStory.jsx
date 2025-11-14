import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateStory({stories, setStories, userName}) {
  const [title, setTitle] = React.useState('');
  const [premise, setPremise] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const authorName = userName;
    const newStory = {
      title,
      author: userName,
      premise,
    };

      try {
        const response = await fetch('/api/stories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newStory),
        });

        if (response.ok) {
          const savedStory = await response.json();
          setStories([...stories, savedStory]);
          navigate(`/storyPage/${savedStory.id}`);
        } else {
          const error = await response.text();
          console.error('Error', error);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };

  return (
    <main className="container-fluid text-center">
      <form onSubmit={handleSubmit} className="text-center container-fluid">
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