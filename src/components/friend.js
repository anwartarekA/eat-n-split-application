import { Button } from "./button";
export function Friend({ friend, onSelect, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <div>
        <img src={friend.image} alt={friend.name} />
      </div>
      <div className="data">
        <span className="name">{friend.name}</span>
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {friend.balance}$
          </p>
        )}
        {friend.balance < 0 && (
          <p className="red">
            you owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      </div>
      <Button styling="select" onclick={() => onSelect(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}
