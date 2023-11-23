import Friend from "./Friend";

function FriendsList({ friends, onSelectedFriend, selectedFriend }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} onSelectedFriend={onSelectedFriend} selectedFriend={selectedFriend} />
            ))}
        </ul>
    );
}

export default FriendsList;
