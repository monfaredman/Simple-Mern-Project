import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";
import Card from "../../../shared/components/UIElements/Card";

export default function UserList(prop) {
  if (prop.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2> No user found!</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {prop.items.map((user) => (
        <UserItem
          key={user._id}
          id={user._id}
          name={user.name}
          image={user.image}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
}
