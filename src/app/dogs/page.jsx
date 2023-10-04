import Image from "next/image";
import { getDogs } from "./action";
import Link from "next/link";
import Like from "@/components/dogs/Like";
import UnLike from "@/components/dogs/UnLike";
import Delete from "@/components/dogs/Delete";
import Edit from "@/components/dogs/Edit";

export default async function AllDogsPage() {
	const dogs = await getDogs();

	return (
		<section>
			<h1 className="flex justify-between p-3 border-b-2 items-center">
				<span className="text-base">All available Dogs information</span>
				<Link href="/dogs/add">
					<button className="border px-3 py-1.5">ADD +</button>
				</Link>
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
				{dogs.length ? (
					dogs.map((dog) => (
						<article className="border text-center p-3 shadow-md group" key={dog._id}>
							<div className="overflow-hidden border relative h-[200px] rounded-md">
								<Image
									className="object-cover group-hover:scale-105 transition-transform"
									fill={true}
									sizes="300px, 120px"
									src={dog.image}
									alt={dog.name}
								/>
							</div>
							<h2 className="text-xl mt-2">Name: {dog.name}</h2>
							<p className="text-base mb-2">Breed: {dog.breed}</p>

							<div className="flex justify-between">
								<div className="flex gap-2 mt-3">
									<Like id={dog._id.toString()} count={dog.like} />
									<UnLike id={dog._id.toString()} count={dog.dislike} />
								</div>
								<div className="flex gap-2 mt-3">
									<Link href={`/dogs/update/${dog._id}`}>
										<Edit />
									</Link>
									<Delete id={dog._id.toString()} />
								</div>
							</div>
						</article>
					))
				) : (
					<p>No dog&apos;s data found.</p>
				)}
			</div>
		</section>
	);
}
