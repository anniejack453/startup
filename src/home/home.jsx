import React from 'react';

export function Home() {
  return (
    <main className="container-fluid text-center">
      <div className="text-center container-fluid">
            <div className="story-links mx-auto text-start" style={{maxWidth: '800px'}}>
                <div className="mb-4">
                    <div id="icon">icon placeholder</div>
                    <a href="storyPage.html" className="fs-3 text-decoration-none text-dark fw-semibold">Your Story Idea #1 (still a link)</a>
                    <p>Most recent idea suggestion title displayed here</p>
                </div>
                <div>
                    <a href="storyPage.html" className="fs-3 text-decoration-none text-dark fw-semibold">Your Story Idea #2</a>
                    <p>This will display links to other users' story idea pages
                    stored in the database. Most recent suggestions will be updated
                    in realtime with Websocket.</p>
                </div>
            </div>
        </div>
    </main>
  );
}