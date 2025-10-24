import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

export function Browse({userName}) {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const allStories = JSON.parse(localStorage.getItem('stories')) || [];
        const otherStories = allStories.filter(story => story.author !== userName);
        setStories(otherStories);
    }, [userName]);

  return (
    <main>
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
                    <p>Other users haven’t created any stories yet.</p>
                )}
            </div>
        </div>
    </main>
  );
}