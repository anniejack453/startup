import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {
  const navigate = useNavigate();
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  useEffect(() => {
    fetch('https://quotes.domiadi.com/api')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.from);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <div
        className="mx-auto p-3 mb-4 border rounded bg-light"
        style={{ maxWidth: '600px', fontStyle: 'italic' }}
        >
        {quote ? (
          <>
            <p className="fs-5">"{quote}"</p>
            <p className="fw-semibold mb-0">— {author}</p>
          </>
        ) : (
          <p>Fetching your quote of the day...</p>
        )}
      </div>
      <Button variant='primary' onClick={() => navigate('/home')}>
        Home
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}