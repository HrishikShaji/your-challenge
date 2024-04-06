import { useUser } from "@/context/UserContext";

export const UserDisplayCard = () => {
  const { user } = useUser();
  if (!user)
    return (
      <div className="bg-neutral-200 rounded-3xl flex-grow flex flex-col gap-4 outline-dotted outline-black">
        SELECT A USER
      </div>
    );
  return (
    <div className="bg-neutral-200 rounded-3xl flex-grow flex flex-col gap-4">
      <h1>{user.name.first}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};
