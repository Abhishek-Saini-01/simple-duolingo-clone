import { auth } from "@clerk/nextjs";

const adminIds = [
  "user_2e02nAUtpMY8vchjCwewMfvKm21",
];

export const isAdmin =  () => {
  const { userId } =  auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};