import { redirect } from "next/navigation";

const Account = () => {
  const userProfileInfo = null;

  if (userProfileInfo === null) {
    redirect("cart?search=product1&random=123");
  }
  return <div>Account</div>;
};

export default Account;
