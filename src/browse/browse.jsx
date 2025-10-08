import React from 'react';
import { NavLink } from 'react-router-dom';

export function Browse() {
  return (
    <main>
        <div className="text-center container-fluid">
            <div className="story-links mx-auto text-start" style={{ maxWidth: '800px' }}>
                <div className="mb-4">
                    <div id="icon">icon placeholder</div>
                    <NavLink to="/storyPage" className="fs-3 text-decoration-none text-dark fw-semibold">
                        Someone's Story Idea #1 (still a link)
                    </NavLink>
                    <p>Most recent idea suggestion title displayed here</p>
                </div>
                <div>
                    <NavLink to="/storyPage" className="fs-3 text-decoration-none text-dark fw-semibold">
                        Someone's Story Idea #2
                    </NavLink>
                    <p>This will display links to other users' story idea pages
                    stored in the database. Most recent suggestions will be updated
                    in realtime with Websocket.</p>
                </div>
            </div>
        </div>
    </main>
  );
}