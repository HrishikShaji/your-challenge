import React, { ReactNode } from "react";

const UserCardSkeleton = () => {
  return (
    <div className="bg-neutral-400 rounded-xl p-2 flex flex-col gap-2"></div>
  );
};

const UserDisplayCardSkeleton = () => {
  return (
    <div className="bg-neutral-200 rounded-3xl flex-grow flex flex-col gap-4 outline-dotted outline-black"></div>
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
