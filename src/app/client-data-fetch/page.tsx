"use client";

import { useEffect, useState } from "react";

const ClientDataFetch = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();
      if (result?.users) {
        setUsers(result.users);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) {
    return <div className="font-bold text-3xl">Loading... Please wait</div>;
  }

  return (
    <div>
      {users && users.length > 0
        ? users.map((user) => <div key={user?.id}>{user?.firstName}</div>)
        : null}
    </div>
  );
};

export default ClientDataFetch;
