import { useUser } from "@/context/UserContext";
import { capitalize } from "@/lib/utils";
import Image from "next/image";

export const UserDisplayCard = () => {
	const { user } = useUser();
	if (!user)
		return (
			<div className="bg-white rounded-[16px] md:h-[291px] shadow-md md:w-[70%] flex flex-col sm:flex-row items-center w-full  md:p-10 p-4 gap-4 sm:gap-2 md:gap-10">
				<div className="w-full h-[128px] flex justify-center items-center">
					<h1 className="text-xl text-center md:text-6xl font-semibold">
						SELECT A USER
					</h1>
				</div>
			</div>
		);
	return (
		<div className="bg-white rounded-[16px] md:h-[291px]  shadow-md md:w-[70%] flex flex-col sm:flex-row items-center w-full  md:p-10 p-4 gap-4 sm:gap-2 md:gap-10">
			<div className="w-[128px] h-[128px] flex-shrink-0 rounded-full overflow-hidden">
				<Image
					className="h-full w-full  object-cover"
					height={1000}
					width={1000}
					alt="image"
					src={user.picture.large}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<h1 className="md:text-[64px] sm:text-3xl  md:leading-[64px] text-xl mb-2  font-semibold text-[#E16259]  border-orange-500 border-b-4">
					{user.name.title} {user.name.first} ${user.name.last}
				</h1>
				<h1 className="md:leading-[29px] md:text-[20px] ">
					<span className="text-[#A259FF] font-semibold">
						{user.location.street.number},
					</span>
					<span>{user.location.street.name},</span>
					<span>{user.location.city},</span>
					<span className="font-semibold">{user.location.country},</span>
					<span>{user.location.postcode}</span>
				</h1>
				<h1 className="md:leading-[29px] md:text-[20px]">
					<span className="text-blue-500">
						{user.location.timezone.offset}-
					</span>
					<span>{user.location.city},</span>
					<span className="underline underline-offset-2">
						{user.location.state},
					</span>
					<span className="italic">{user.location.country}</span>
				</h1>
				<h1 className="text-[#8A8A8A]">{capitalize(user.gender)}</h1>
			</div>
		</div>
	);
};
