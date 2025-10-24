import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export function StoryPage({stories}) {
  const { id } = useParams();
  const story = stories.find((s) => s.id === Number(id));

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