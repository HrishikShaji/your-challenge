import Link from "next/link";

export const Navbar = () => {
	return (
		<div className="w-full p-5 flex fixed top-0 z-50 justify-between items-center">
			<Link href="/" className="text-2xl font-semibold">
				YourChallenge
			</Link>
			<div className="flex gap-4">
				<Link href="/">Product</Link>
				<Link href="/">Download</Link>
				<Link href="/">Pricing</Link>
			</div>
		</div>
	);
};