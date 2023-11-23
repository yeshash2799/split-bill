import { useState } from "react";
import Button from "./Button";

function AddFriendForm({ onAddNewFriend }) {
    const [name, setname] = useState("");

    function handleName(e) {
        setname(e.target.value);
    }

    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleImage(e) {
        setImage(e.target.value);
    }

    function handleAddFriendForm(e) {
        e.preventDefault();

        if (!name || !image) {
            return null;
        }

        const id = crypto.randomUUID();

        const newfriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddNewFriend(newfriend);

        setname(() => "");
        setImage(() => "https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handleAddFriendForm}>
            <label>Friend Name</label>
            <input type="text" value={name} onChange={handleName} />

            <label>Image URL</label>
            <input type="text" value={image} onChange={handleImage} />

            <Button>Add</Button>
        </form>
    );
}

export default AddFriendForm;
