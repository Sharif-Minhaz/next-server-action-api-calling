"use client"

import { deleteDog } from "@/app/dogs/action"

export default function Delete({ id }) {
	return (
		<button onClick={() => deleteDog(id)} className="border px-2 py-1.5 hover:bg-red-600 hover:text-white border-red-600 text-red-600">Delete</button>
	)
}