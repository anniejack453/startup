import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export function StoryPage({stories, setStories}) {
  const { id } = useParams();
  const storyId = Number(id);
  const [story, setStory] = React.useState(null);

  React.useEffect(() => {
    async function fetchStory() {
      try {
        const response = await fetch(`/api/stories/${storyId}`);
        if (response.ok) {
          const data = await response.json();
          setStory(data);
        } else {
          console.error('Error:', response.status);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    }
    fetchStory();
  }, [storyId]);

  React.useEffect(() => {
    if (!story) return;

    const interval = setInterval(async () => {
      const randomId = Math.floor(Math.random() * 1000);
      const newIdea = {
        title: `New Idea #${randomId}`,
        text: `Websocket update idea for "${story.title}"`,
      };

      try {
      const response = await fetch(`/api/stories/${storyId}/ideas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIdea),
      });

      if (response.ok) {
        const savedIdea = await response.json();
        setStory(prev => ({...prev, ideas: [...prev.ideas, savedIdea]}));
        setStories(prev =>
          prev.map(s =>
            s.id === storyId
              ? { ...s, ideas: [...s.ideas, savedIdea] }
              : s
          )
        );
      }
    } catch (err) {
      console.error('Error:', err);
    }
    }, 20000);

    return () => clearInterval(interval);
  }, [storyId, story?.title, setStories, story]);

  if (!story) {
    return <main className="container-fluid text-center">Story not found</main>;
  }

  return (
    <main className="container-fluid text-center">
      <div className="container-fluid mx-auto" style={{maxWidth: '800px', padding: '20px'}}>
            <div id="story" className="mx-auto text-center" style={{padding: '20px'}}>
                <h2>{story.title}</h2>
                <h4>By {story.author}</h4>
                <p>{story.premise}</p>
            </div>
            {story.ideas?.map((idea, index) => (
                <div key={index} className="my-3">
                    <h4>{idea.title}</h4>
                    <p>{idea.text}</p>
                </div>
            ))}
        </div>
        <div className="container-fluid text-center my-4">
            <NavLink to={`/contribute/${story.id}`} className="btn btn-outline-dark btn-md fw-bold px-5 py-3">
                Contribute
            </NavLink>
        </div>
    </main>
  );
}