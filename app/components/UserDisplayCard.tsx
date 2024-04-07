import { useUser } from "@/context/UserContext";
import Image from "next/image";

export const UserDisplayCard = () => {
  const { user } = useUser();
  if (!user)
    return (
      <div className="bg-neutral-200 rounded-3xl  md:w-[70%] flex flex-col sm:flex-row items-center justify-center w-full sm:p-10 p-4 gap-4">
        <div className="w-full h-52 flex justify-center items-center">
          <h1 className="text-xl md:text-6xl font-semibold">SELECT A USER </h1>
        </div>
      </div>
    );
  return (
    <div className="bg-neutral-200 rounded-3xl h-[500px] sm:h-auto  shadow-2xl md:w-[70%] flex flex-col sm:flex-row items-center w-full sm:p-10 p-4 gap-4">
      <div className="w-80 h-52 sm:w-52 overflow-hidden">
        <Image
          className="h-full w-full rounded-3xl object-cover"
          height={1000}
          width={1000}
          alt="image"
          src={user.picture.large}
        />
      </div>
      <div className="flex flex-col w-80 sm:w-auto ">
        <h1 className="sm:text-4xl text-xl mb-2  font-semibold text-orange-500  border-orange-500 border-b-4">
          {user.name.title} {user.name.first} ${user.name.last}
        </h1>
        <h1 className="flex-nowrap">
          <span>{user.location.street.number},</span>
          <span>{user.location.street.name},</span>
          <span className="block">{user.location.city},</span>
          <span className="font-semibold">{user.location.country},</span>
          <span>{user.location.postcode}</span>
        </h1>
        <h1>
          <span className="text-blue-500">
            {user.location.timezone.offset}-
          </span>
          <span>{user.location.city},</span>
          <span className="underline underline-offset-2">
            {user.location.state},
          </span>
          <span>{user.location.country}</span>
        </h1>
        <h1 className="text-gray-700">{user.gender}</h1>
      </div>
    </div>
  );
};
