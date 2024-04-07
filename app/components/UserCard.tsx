import { useUser } from "@/context/UserContext";

interface UserCardProps {
  gender: string;
  fullName: string;
  image: string;
  email: string;
  nationality: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  gender,
  fullName,
  image,
  email,
  nationality,
}) => {
  const { users, setUser } = useUser();

  async function handleClick(email: string) {
    const user = users.find((user) => user.email === email);
    if (!user) return;
    setUser(user);
  }
  return (
    <div
      onClick={() => handleClick(email)}
      className="shadow-lg  group overflow-hidden rounded-xl cursor-pointer  text-sm flex flex-col "
    >
      <div className="bg-neutral-200 px-4 group-hover:bg-purple-500 border-neutral-100 py-3  border-b-2">
        <h1 className="text-md font-semibold group-hover:text-white">
          {fullName}
        </h1>
      </div>
      <div className="px-4 py-2 bg-neutral-100 group-hover:bg-purple-400">
        <h1 className="  group-hover:text-white ">{gender} </h1>
        <h1 className="  group-hover:text-white ">{nationality}</h1>
        <h1 className="text-orange-500 group-hover:text-white">{email}</h1>
      </div>
    </div>
  );
};
