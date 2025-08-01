import { useState } from "react";
import { FriendsList } from "./components/friendsList";
import { Button } from "./components/button";
import { FormAddFriend } from "./components/formAddFriend";
import FormSplitBill from "./components/formSplitBill";

const initialFriends = [
  {
    id: 780,
    name: "stephen rose",
    image: "https://i.pravatar.cc/48?u=jkr45dmdds5566er6r66",
    balance: 20,
  },
  {
    id: 678,
    name: "harry johan",
    image: "https://i.pravatar.cc/48?u=jkwadshejq83adm,",
    balance: -10,
  },
  {
    id: 45,
    name: "jonas rahime",
    image: "https://i.pravatar.cc/48?u=jkr45dmdds5566666",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleSelection(friend) {
    setSelectedFriend(friend.id === selectedFriend?.id ? null : friend);
    setShowAddFriend(false);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  function handleShowAddFriendForm() {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null);
  }
  function handleInfoSelectedFriend(balance) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="container">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelect={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend
            onAddFriend={handleAddFriend}
            onShowAddForm={setShowAddFriend}
          />
        )}
        <Button styling="add" onclick={handleShowAddFriendForm}>
          {showAddFriend ? "close" : "add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <div className="split-form">
          <FormSplitBill
            selectedFriend={selectedFriend}
            onUpdate={handleInfoSelectedFriend}
          />
        </div>
      )}
    </div>
  );
}

export default App;
