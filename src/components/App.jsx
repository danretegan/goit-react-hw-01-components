// App.jsx

import React from 'react';
import Profile from './profile/Profile';
import user from './user.json';
import Statistics from './statistics/Statistics';
import data from './data.json';
import FriendList from './friendList/FriendList';
import friends from './friends.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        padding: 20,
        backgroundColor: 'aliceblue',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
