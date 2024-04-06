"use client";
import React from "react";
import { useUser } from "@/context/UserContext";
import { UserCard } from "../components/UserCard";
import { UserDisplayCard } from "../components/UserDisplayCard";
import { useFetchUsers } from "@/hooks/useFetchUsers";
import Skeleton from "../components/Skeleton";

const Page = () => {
  const { users } = useUser();
  const { isLoading } = useFetchUsers();

  return (
    <div className="w-full h-screen flex flex-col gap-10 p-20">
      {isLoading ? <Skeleton variant="userDisplayCard" /> : <UserDisplayCard />}
      <div className="grid grid-cols-4 gap-5">
        {isLoading
          ? Array.from({ length: 20 }).map((_, i) => (
              <Skeleton variant="userCard" key={i} />
            ))
          : users.map((item, i) => (
              <UserCard
                key={i}
                gender={item.gender}
                fullName={`${item.name.title}${item.name.first}${item.name.last}`}
                nationality={item.nat}
                image={item.picture.thumbnail}
                email={item.email}
              />
            ))}
      </div>
    </div>
  );
};

export default Page;
