import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function Contribute({stories, setStories}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === Number(id)
          ? {
              ...story,
              ideas: [
                ...story.ideas,
                { title: title || 'Untitled', text: suggestion || 'No text provided' },
              ],
            }
          : story
      )
    );
    navigate(`/storyPage/${id}`);
  };

  return (
    <main className="container-fluid text-center">
      <form onSubmit={handleSubmit} className="text-center container-fluid">
            <div className="input-group mb-3">
            <input className="mx-auto" style={{width: '300px'}} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="input-group mb-3">
            <input className="mx-auto" style={{width: '300px'}} type="text" placeholder="Story Suggestion" value={suggestion} onChange={(e) => setSuggestion(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-outline-dark">Post</button>
        </form>
    </main>
  );
}