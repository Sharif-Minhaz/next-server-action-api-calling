import Link from "next/link";

export default function HomePage() {
	return (
		<main>
			<p className="mb-4 border-b-2 p-3">Home page</p>
			<div className="inline-flex flex-col gap-3 px-3">
				<Link className="border px-2 py-1.5 rounded-lg" href="/dogs">Go to dogs page {"->"}</Link>
				<Link className="border px-2 py-1.5 rounded-lg" href="/products">Go to products page {"->"}</Link>
			</div>
		</main>
	);
}