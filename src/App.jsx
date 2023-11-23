import { useState } from "react";
import initialFriends from "./constants";
import FriendsList from "./components/FriendList";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import SplitBillForm from "./components/SplitBillForm";

function App() {
    const [addFriendForm, setAddFriendForm] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleAddFriendForm() {
        setAddFriendForm((addFriendForm) => !addFriendForm);
    }

    function handleFriends(newFriend) {
        setFriends((friends) => [...friends, newFriend]);
        setAddFriendForm(() => false);
    }

    function handleUpdatedFriends(updatedFriend) {
        setFriends((friends) => friends.map((friend) => (friend.id === updatedFriend.id ? updatedFriend : friend)));
        setSelectedFriend(() => null);
    }

    function handleSelectedFriend(friend) {
        setSelectedFriend((selectedFriend) => (selectedFriend?.id === friend.id ? null : friend));
        setAddFriendForm(() => false);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList friends={friends} onSelectedFriend={handleSelectedFriend} selectedFriend={selectedFriend} />

                {addFriendForm && <AddFriendForm onAddNewFriend={handleFriends} />}

                <Button onClick={handleAddFriendForm}>{addFriendForm ? "close" : "add"}</Button>
            </div>
            {selectedFriend && <SplitBillForm selectedFriend={selectedFriend} onSplitBill={handleUpdatedFriends} />}
        </div>
    );
}

export default App;
