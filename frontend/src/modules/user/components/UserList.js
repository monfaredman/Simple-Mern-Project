import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";

export default function UserList(prop) {
  if (prop.items.length === 0) {
    return (
      <div className="center">
        <h2> No user found!</h2>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {prop.items.map((user) => (
          <UserItem
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places}
          />
        ))}
      </ul>
    </div>
  );
}
