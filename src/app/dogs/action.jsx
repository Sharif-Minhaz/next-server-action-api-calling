"use server";

import Dog from "@/models/Dog";
import connect from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addDog(formData) {
	const data = Object.fromEntries(formData.entries());
	await connect();
	const newDog = await Dog.create(data);
	revalidatePath("/dogs");

	return newDog;
}

export async function addDogAndRedirect(formData) {
	const data = Object.fromEntries(formData.entries());
	await connect();
	await Dog.create(data);

	redirect("/dogs");
}

export async function updateDog(formData) {
	const data = Object.fromEntries(formData.entries());

	await connect();
	await Dog.findByIdAndUpdate(data.dogId, data);

	revalidatePath("/dogs");
	revalidatePath(`/dogs/update/${data.dogId}`);
}

export async function updateDogAndRedirect(formData) {
	const data = Object.fromEntries(formData.entries());
	await connect();
	await Dog.findByIdAndUpdate(data.dogId, data);

	redirect("/dogs");
}

export async function getDogs() {
	await connect();
	const dogs = await Dog.find().lean();

	return dogs;
}

export async function getSingleDog(id) {
	await connect();
	const dog = await Dog.findById(id).lean();

	return dog;
}

export async function deleteDog(id) {
	await connect();
	await Dog.findByIdAndDelete(id);

	revalidatePath("/dogs");
}

export async function like(id) {
	await connect();
	await Dog.findByIdAndUpdate(id, { $inc: { like: 1 } });

	revalidatePath("/dogs");
}

export async function dislike(id) {
	await connect();
	await Dog.findByIdAndUpdate(id, { $inc: { dislike: 1 } });

	revalidatePath("/dogs");
}
