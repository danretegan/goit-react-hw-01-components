import Profile from './profile/Profile';
import data from './user.json';

export const App = () => {
  console.log(data);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template Test
      <Profile condition={true}></Profile>
    </div>
  );
};
