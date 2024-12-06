const fetchUserDetails = async (id) => {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/users/${id}`);
    const result = await apiResponse.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const UserDetailsPage = async ({ params }) => {
  const userDetails = await fetchUserDetails(params.details);
  return (
    <div>
      <h1>This is user details page</h1>
      <p>
        {userDetails?.firstName} {userDetails?.lastName}
      </p>
    </div>
  );
};

export default UserDetailsPage;
