import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

export function Home({userName}) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function loadStories() {
      try {
        const response = await fetch('/api/stories');
        if (response.ok) {
          const allStories = await response.json();
          const userStories = allStories.filter((story) => story.author === userName);
          setStories(userStories);
        } else if (response.status === 401) {
          console.warn('Not authorized.');
        } else {
          console.error('Failed to load stories:', response.status);
        }
      } catch (err) {
        console.error('Error fetching stories:', err);
      }
    }
    loadStories();
  }, [userName]);

  return (
    <main className="container-fluid text-center">
      <div className="text-center container-fluid">
            <div className="story-links mx-auto text-start" style={{maxWidth: '800px'}}>
                {stories.length > 0 ? (
                    stories.map((story) => (
                    <div key={story.id} className="mb-4">
                        <NavLink
                        to={`/storyPage/${story.id}`}
                        className="fs-3 text-decoration-none text-dark fw-semibold"
                        >
                        {story.title}
                        </NavLink>
                        <p>{story.premise}</p>
                    </div>
                    ))
                ) : (
                    <p>You haven’t created any stories yet.</p>
                )}
            </div>
        </div>
    </main>
  );
}