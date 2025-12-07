import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function Contribute({stories, setStories}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [error, setError] = useState(null);
  const socket = React.useRef(null);

  React.useEffect(() => {
    socket.current = new WebSocket(`ws://${window.location.host}`);
    return () => socket.current.close();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    const newIdea = {title: title || 'Untitled', text: suggestion || 'No text provided'};

    try {
      const response = await fetch(`/api/stories/${id}/ideas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIdea),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const savedIdea = await response.json();
      socket.current.send(JSON.stringify({
        type: "new-idea",
        storyId: Number(id),
        idea: savedIdea
      }));

      setStories((prevStories) =>
        prevStories.map((story) =>
          story.id === Number(id)
            ? { ...story, ideas: [...story.ideas, savedIdea] }
            : story
        )
      );
    
      navigate(`/storyPage/${id}`);
    } catch (err) {
      console.error('Error:', err)
    }
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