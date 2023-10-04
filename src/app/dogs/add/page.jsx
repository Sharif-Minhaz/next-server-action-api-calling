import Form from "@/components/dogs/Form";
import Link from "next/link";

export default function AddPage() {
	return (
		<section>
			<h2 className="flex justify-between p-3 border-b-2 items-center">
				<span>Add dog&apos;s information</span>
				<Link href="/dogs"><button className="border px-2 py-1.5">↩ Return</button></Link>
			</h2>

			<div className="p-4">
				<Form />
			</div>
		</section>
	);
}
