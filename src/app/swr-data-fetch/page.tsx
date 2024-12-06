"use client";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SwrDataFetch = () => {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: failed to loading</div>;

  return (
    <div>
      <ul>
        {data && data.users && data.users.length > 0
          ? data.users?.map((user) => (
              <li className="mt-5" key={user.id}>
                {user.firstName}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default SwrDataFetch;
