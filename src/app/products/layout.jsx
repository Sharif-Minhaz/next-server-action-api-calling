import Link from "next/link";

export default function ProductLayout({ children }) {
	return (
		<div>
			<h1 className="px-3 py-2 flex items-center justify-between">
				<span>Welcome to demo products section</span>
				<Link href="/products">
					<button className="border px-2 py-1.5"> ↩ Return</button>
				</Link>
			</h1>
			<div>{children}</div>
			<footer className="px-3 pb-2">
				&copy; minhaz - {new Date().getFullYear()} | All right reserved.
			</footer>
		</div>
	);
}
