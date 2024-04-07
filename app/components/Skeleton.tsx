import React, { ReactNode } from "react";

const UserCardSkeleton = () => {
	return (
		<div className="shadow-md py-[12px] px-[16px]  overflow-hidden bg-neutral-500 rounded-md  gap-1 flex flex-col ">
			<div className="h-[21px] w-full rounded-xl bg-neutral-400"></div>
			<div className="h-[29.7px] w-full rounded-xl bg-neutral-400"></div>
			<div className="h-[22.5px] w-full rounded-xl bg-neutral-400"></div>
		</div>
	);
};

const UserDisplayCardSkeleton = () => {
	return (
		<div className="bg-neutral-500 rounded-[16px] md:h-[291px] shadow-md md:w-[70%] flex flex-col sm:flex-row items-center w-full  md:p-10 p-4 gap-4 sm:gap-2 md:gap-10">
			<div className="w-[128px] h-[128px] flex-shrink-0 bg-neutral-400 rounded-full overflow-hidden"></div>
			<div className="flex flex-col w-full h-full gap-1">
				<div className=" sm:h-[36px] w-full  md:h-[64px] rounded-3xl h-[28px]  mb-2  font-semibold bg-neutral-400"></div>
				<div className="md:h-[29px] h-[26px] w-full  bg-neutral-400 rounded-3xl"></div>
				<div className="md:h-[29px] h-[26px] w-full bg-neutral-400 rounded-3xl"></div>
				<div className="md:h-[29px] h-[26px] w-full bg-neutral-400 rounded-3xl"></div>
			</div>
		</div>
	);
};

interface SkeletonProps {
	variant: "userCard" | "userDisplayCard";
}

const lookup: { [key: string]: ReactNode } = {
	userCard: <UserCardSkeleton />,
	userDisplayCard: <UserDisplayCardSkeleton />,
};

const Skeleton: React.FC<SkeletonProps> = ({ variant }) => {
	return lookup[variant];
};

export default Skeleton;
