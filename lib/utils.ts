export async function getUsers() {
	const response = await fetch(
		"https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20",
		{
			method: "GET",
			headers: { "Content-Type": "application/json" },
		},
	);

	if (!response.ok) {
		throw new Error("Oops,Something went wrong!");
	}

	const data = await response.json();
	return data.results;
}
