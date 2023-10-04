export default function ProductModal({ children }) {
	return (
		<div className="bg-black/75 w-full h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<div className="w-[800px]">{children}</div>
		</div>
	);
}
