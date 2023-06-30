import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";

export default function Users() {
  const [loadedUsers, setLoadedUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);

    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);
  const errorHandler = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
    </React.Fragment>
  );
}
