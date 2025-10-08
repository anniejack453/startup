import React from 'react';

export function CreateStory() {
  return (
    <main className="container-fluid text-center">
      <form method="get" action="storyPage.html" className="text-center container-fluid">
            <div>
            <a href="https://lordicon.com/">Select icon</a>
            <p>^Placeholder to use API to select icon for story</p>
            </div>
            <div className="input-group mb-3">
            <input className="mx-auto" style={{width: '300px'}} type="text" placeholder="Story Title" />
            </div>
            <div className="input-group mb-3">
            <input className="mx-auto" style={{width: '300px'}} type="text" placeholder="Story Premise" />
            </div>
            <button type="submit" className="btn btn-outline-dark">Post</button>
        </form>
    </main>
  );
}