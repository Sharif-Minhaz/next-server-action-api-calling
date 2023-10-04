"use client";

import { addDog, addDogAndRedirect, updateDog, updateDogAndRedirect } from "@/app/dogs/action";

export default function Form({ update = false, dog={}}) {
	return (
		<form action={update ? updateDog : addDog} className="text-black m-auto w-full sm:w-[450px] mt-8 border shadow-md">
			<h2 className="text-lg border-b-2 p-3">{update ? "Update" : "Add"} Dog information</h2>
			<div className="p-3">
				<input type="hidden" name="dogId" value={dog?._id?.toString()} />
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Name</label>
					<input
						required
						name="name"
						defaultValue={dog?.name}
						className="border px-2 py-1.5 mb-3"
						id="name"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="image">Image Link</label>
					<input
						name="image"
						defaultValue={dog?.image}
						className="border mb-3 px-2 py-1.5"
						type="url"
						id="image"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="breed">Breed</label>
					<input
						required
						name="breed"
						defaultValue={dog?.breed}
						className="border px-2 py-1.5"
						id="breed"
					/>
				</div>
				<div className="mt-5">
					<button className="px-3 py-2 border active:shadow-md">
						{update ? "Update" : "Save"}
					</button>
					<button
						formAction={update ? updateDogAndRedirect : addDogAndRedirect}
						className="px-3 py-2 border ml-2 active:shadow-md"
					>
						{update ? "Update and back" : "Save and return"}
					</button>
				</div>
			</div>
		</form>
	);
}
