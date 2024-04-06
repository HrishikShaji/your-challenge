import { useUser } from "@/context/UserContext";
import { getUsers } from "@/lib/utils";
import { useEffect, useState } from "react";

export const useFetchUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setUsers } = useUser();
  useEffect(() => {
    async function getInitialUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getInitialUsers();
  }, []);

  return { isLoading };
};
