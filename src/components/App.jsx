import Profile from './Profile/Profile';

import user from './Data/user.json'
// import data from './Data/data.json'
// import friends from './Data/friends.json'



export const App = () => {
  return (
    <>
      <Profile users={user} />
    </>
  );
};
