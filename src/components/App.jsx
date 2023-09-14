import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

import user from './Data/user.json'
import data from './Data/data.json'
import friends from './Data/friends.json'



export const App = () => {
  return (
    <>
      <Profile users={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </>
  );
};
