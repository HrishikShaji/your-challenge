import { useUser } from "@/context/UserContext";
import Image from "next/image";

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
			className="bg-orange-200  group overflow-hidden rounded-xl cursor-pointer  text-sm flex flex-col "
		>
			<div className="bg-orange-400 px-4 group-hover:bg-blue-500 border-neutral-100 py-3  border-b-2">
				<h1 className="text-md font-semibold">{fullName}</h1>
			</div>
			<div className="px-4 py-2 group-hover:bg-blue-200">
				<h1>{gender} </h1>
				<h1>{nationality}</h1>
				<h1>{email}</h1>
			</div>
		</div>
	);
};
