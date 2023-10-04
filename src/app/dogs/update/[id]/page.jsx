import Form from "@/components/dogs/Form";
import {getDogs, getSingleDog } from "../../action";
import Link from "next/link";

export async function generateStaticParams() {
	const dogs = await getDogs();

	return dogs.map((dog) => ({
		id: dog._id.toString(),
	}));
}

export default async function UpdatePage({ params }) {
	const dog = await getSingleDog(params.id);
	dog._id = dog._id.toString();

	return (
		<section>
			<h3 className="border-b-2 p-3 flex justify-between items-center">
				<span>Update Dog&apos;s Information</span>
				<Link href="/dogs">
					<button className="border px-2 py-1.5"> ↩ Return</button>
				</Link>
			</h3>

			<div className="p-4">
				<Form update={true} dog={dog} />
			</div>
		</section>
	);
}
