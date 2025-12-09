import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export function StoryPage({socket}) {
  const { id } = useParams();
  const storyId = Number(id);
  const [story, setStory] = React.useState(null);
  const [notice, setNotice] = React.useState("");
  const socketRef = React.useRef(null);

  React.useEffect(() => {
    let isConnected = true
    async function fetchStory() {
      try {
        const response = await fetch(`/api/stories/${storyId}`);
        if (response.ok) {
          const data = await response.json();
          if (isConnected) setStory(data);
        } else {
          console.error('Error:', response.status);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    }
    fetchStory();
    return () => {
      isConnected = false;
    };
  }, [storyId]);

  React.useEffect(() => {
    socketRef.current = socket

    socket.onopen = () => {
      socket.send(JSON.stringify({
        type: "join-story",
        storyId: storyId,
      }));
    };

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      console.log("WS message received:", msg);

      if (msg.type === "user-joined" && msg.storyId === storyId) {
        setNotice("Another writer contibuted to the story. Refresh.");
      }
    };
    socket.onerror = (e) => console.error("WS error", e);
    socket.onclose = () => {
      console.log("WS closed");
    };

    return () => {
      socket.close(1000, "User navigated away");
    };
  }, [storyId]);

  if (!story) {
    return <main className="container-fluid text-center">Story not found</main>;
  }

  return (
    <>
    <main className="container-fluid text-center">
      {notice && (
        <div style={{
          position: "fixed",
          top: "100px",
          left: "10px",
          padding: "8px 12px",
          borderRadius: "6px",
          color: "black"
        }}>
          {notice}
        </div>
      )}
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
    </>
  );
}