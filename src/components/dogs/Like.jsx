"use client";

import { like } from "@/app/dogs/action";

export default function Like({ id, count }) {
	return (
		<button
			onClick={()=>like(id)}
			className="border px-2 py-1.5 border-blue-400 text-blue-400 transition-all hover:bg-blue-400 hover:text-white"
		>
			{`👍: ${count}`}
		</button>
	);
}
