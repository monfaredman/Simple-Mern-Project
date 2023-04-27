import React from "react";
import UserList from "../components/UserList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Moslem Hosseinpour",
      image: "https://avatars.githubusercontent.com/u/78975864?v=4",
      places: 3,
    },
  ];

  return (
    <div>
      <UserList items={USERS} />
    </div>
  );
}
