import { redirect } from "next/navigation";

const Account = () => {
  const userProfileInfo = null;

  if (userProfileInfo === null) {
    redirect("profile");
  }
  return <div>Account</div>;
};

export default Account;
