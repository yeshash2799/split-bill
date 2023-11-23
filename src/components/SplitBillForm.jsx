import { useState } from "react";
import Button from "./Button";

function SplitBillForm({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState("");
    const [userBill, setUserBill] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");
    const paidByFriend = bill ? bill - userBill : "";
    let updatedSelectedFriend = {};

    function handleBill(e) {
        setBill(() => Number(e.target.value));
    }

    function handleUserBill(e) {
        setUserBill(() => (Number(e.target.value) > bill ? userBill : Number(e.target.value)));
    }

    function handleWhoIsPaying(e) {
        setWhoIsPaying(() => e.target.value);
    }

    function handleSplitBillForm(e) {
        e.preventDefault();

        if (!bill || !userBill) {
            return null;
        }

        if (whoIsPaying === "user") {
            updatedSelectedFriend = {
                ...selectedFriend,
                balance: selectedFriend.balance + paidByFriend,
            };
        }

        if (whoIsPaying === "friend") {
            updatedSelectedFriend = {
                ...selectedFriend,
                balance: selectedFriend.balance - userBill,
            };
        }

        onSplitBill(updatedSelectedFriend);
    }

    return (
        <form className="form-split-bill" onSubmit={handleSplitBillForm}>
            <h2>split the bill with {selectedFriend.name}</h2>

            <label>Bill Value</label>
            <input type="text" value={bill} onChange={handleBill} />

            <label>Your Expense</label>
            <input type="text" value={userBill} onChange={handleUserBill} />

            <label>{`${selectedFriend.name}'s`} Expense</label>
            <input type="text" disabled value={paidByFriend} />

            <label>Who is paying the Bill?</label>
            <select value={whoIsPaying} onChange={handleWhoIsPaying}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
}

export default SplitBillForm;
