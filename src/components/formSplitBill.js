import { useState } from "react";
import { Button } from "./button";

export function FormSplitBill({ selectedFriend, onUpdate }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoWillPay, setWhoWillPay] = useState("user");
  const friendExpense = bill ? bill - yourExpense : "";
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !yourExpense) return;
    onUpdate(whoWillPay === "user" ? friendExpense : -yourExpense);
    setBill("");
    setYourExpense("");
    setWhoWillPay("user");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>split bill with {selectedFriend.name}</h3>
      <div>
        <label>Bill</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Your expense</label>
        <input
          type="text"
          value={yourExpense}
          onChange={(e) =>
            setYourExpense(
              Number(e.target.value) > bill
                ? yourExpense
                : Number(e.target.value)
            )
          }
        />
      </div>
      <div>
        <label>{selectedFriend.name}'s expense</label>
        <input type="text" disabled value={friendExpense} />
      </div>

      <div className="selection">
        <label>Who will pay?</label>
        <select
          value={whoWillPay}
          onChange={(e) => setWhoWillPay(e.target.value)}
        >
          <option value="user">you</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>
      <Button styling="split-bill">bill split</Button>
    </form>
  );
}
