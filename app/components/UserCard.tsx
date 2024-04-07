import { useUser } from "@/context/UserContext";
import { capitalize } from "@/lib/utils";

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
			className="shadow-md py-[12px] px-[16px] group overflow-hidden bg-white rounded-md cursor-pointer gap-1 hover:bg-[#A259FF]  flex flex-col "
		>
			<h1 className="  group-hover:text-white leading-[21px] text-[14px] text-black/60">
				{capitalize(gender)} - {nationality}
			</h1>
			<h1 className="text-[22px] leading-[29.7px] font-semibold group-hover:text-white">
				{fullName}
			</h1>
			<h1 className="text-[#E16259] leading-[22.5px] text-[15px]  group-hover:text-white">
				{email}
			</h1>
		</div>
	);
};
