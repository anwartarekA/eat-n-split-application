import { Friend } from "./friend";
export function FriendsList({ friends, onSelect, selectedFriend }) {
  return (
    <ul className="friends">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
