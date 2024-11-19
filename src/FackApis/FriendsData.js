import { useState } from 'react';

const useFriendsData = () => {
  const [friends, setFriends] = useState([]);

  const addFriend = (friend) => {
    setFriends([...friends, friend]);
  };

  return {
    friends,
    addFriend,
  };
};

export { useFriendsData }; 