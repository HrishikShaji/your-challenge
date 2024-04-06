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
      className="bg-neutral-100 rounded-xl p-2 flex flex-col gap-2"
    >
      <h1>{fullName}</h1>
      <h1>{email}</h1>
    </div>
  );
};
