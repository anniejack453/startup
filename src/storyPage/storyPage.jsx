import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export function StoryPage({stories, setStories}) {
  const { id } = useParams();
  const storyId = Number(id);
  const [story, setStory] = React.useState(
    stories.find((s) => s.id === storyId)
  );

  React.useEffect(() => {
    if (!story) return;

    const interval = setInterval(() => {
      const randomId = Math.floor(Math.random() * 1000);
      const newIdea = {
        title: `New Idea #${randomId}`,
        text: `Websocket update idea for "${story.title}"`,
      };

      setStory((prev) => ({
        ...prev,
        ideas: [...prev.ideas, newIdea],
      }));

      setStories((prevStories) => {
        const updated = prevStories.map((s) =>
          s.id === storyId ? { ...s, ideas: [...s.ideas, newIdea] } : s
        );
        localStorage.setItem('stories', JSON.stringify(updated));
        return updated;
      });
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
            {story.ideas.map((idea, index) => (
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