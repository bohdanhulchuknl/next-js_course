import Link from "next/link";

async function fetchListOfUsers() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users");
    const result = await apiResponse.json();
    return result.users;
  } catch (error) {
    throw new Error(error);
  }
}

const ServerDataFetch = async () => {
  const listOfUsers = await fetchListOfUsers();
  return (
    <div>
      <h1>ServerDataFetch</h1>
      <h2>User List</h2>
      <ul>
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user) => (
              <li key={user.id} className="flex gap-2">
                <div>{user.firstName}</div>
                <div>
                  <Link href={`/server-data-fetch/${user.id}`}>TO</Link>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ServerDataFetch;
