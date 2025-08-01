import { useState } from "react";
import { Button } from "./button";
export function FormAddFriend({ onAddFriend, onShowAddForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    const id = crypto.randomUUID();
    e.preventDefault();
    if (!name || !image) return;
    const newObj = {
      id,
      name,
      image: `${image}/?u=${id}`,
      balance: 0,
    };
    onAddFriend(newObj);
    setName("");
    setImage("https://i.pravatar.cc/48");
    onShowAddForm(false);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <div>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <Button styling="adding">add</Button>
    </form>
  );
}
