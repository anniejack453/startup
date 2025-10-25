import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({userName, authState, onAuthChange}) {
  return (
    <main className="container-fluid p-0 text-center">
      <div id="picture" className="picture-box"><img className="img-fluid w-100" src="scenery-art-wallpaper.jpg" alt="random" /></div>
      <div>
        {authState !== AuthState.Unknown && <h1>Let's tell a story, together</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}