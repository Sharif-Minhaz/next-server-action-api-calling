"use client";

import { dislike } from "@/app/dogs/action";

export default function UnLike({ id, count }) {
	return (
		<button
			onClick={() => dislike(id)}
			className="border border-red-300 text-red-400 px-2 py-1.5 transition-all hover:bg-red-400 hover:text-white"
		>
			{`👎: ${count}`}
		</button>
	);
}
