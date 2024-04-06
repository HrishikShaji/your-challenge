"use client";

import { User } from "@/types/types";
import { useEffect, useState } from "react";

export const ProductsSection = () => {
	const [data, setData] = useState<User[]>([]);
	const [selectedItem, setSelectedItem] = useState();

	useEffect(() => {
		async function getData() {
			await fetch(
				"https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20",
				{
					method: "GET",
					headers: { "Content-Type": "application/json" },
				},
			)
				.then((res) => res.json())
				.then((data) => setData(data.results));
		}

		getData();
	}, []);

	async function handleClick(email: string) {
		const response = await fetch(
			`https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20`,
		).then((res) => res.json());

		const user = response.results.filter((user: User) => user.email === email);

		console.log(user);
	}

	return (
		<div className="w-full h-screen flex flex-col gap-10 p-20">
			<div className="bg-neutral-200 rounded-3xl flex-grow flex"></div>
			<div className="grid grid-cols-4 gap-5">
				{data?.map((item, i) => (
					<div
						onClick={() => handleClick(item.email)}
						key={i}
						className="bg-neutral-100 rounded-xl p-2 flex flex-col gap-2"
					>
						<h1>{item.name.first}</h1>
						<h1>{item.email}</h1>
					</div>
				))}
			</div>
		</div>
	);
};
