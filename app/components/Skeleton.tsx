import React, { ReactNode } from "react";

const UserCardSkeleton = () => {
	return (
		<div className="bg-neutral-500   overflow-hidden rounded-xl   text-sm flex flex-col ">
			<div className="bg-neutral-500 px-4 border-neutral-100 py-3  border-b-2">
				<div className="h-[16px] rounded-md bg-white w-full"></div>
			</div>
			<div className="px-4 py-2">
				<div className="h-[48px] rounded-md bg-white w-full"></div>
			</div>
		</div>
	);
};

const UserDisplayCardSkeleton = () => {
	return (
		<div className="bg-neutral-500 rounded-3xl  md:w-[70%] flex flex-col sm:flex-row items-center sm:items-start w-full sm:p-10 p-4 gap-4">
			<div className="w-80 h-52 sm:w-52 overflow-hidden bg-neutral-400 rounded-3xl"></div>
			<div className="flex flex-col w-80 gap-2 sm:w-full ">
				<div className="bg-white h-[20px] rounded-md w-full"></div>
				<div className="bg-white h-[100px] rounded-md w-full"></div>
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
