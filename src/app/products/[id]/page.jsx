import DetailsProduct from "@/components/product/DetailsProduct";

export async function generateStaticParams() {
	const data = await fetch("https://dummyjson.com/products").then((res) => res.json());
	return data.products.map((product) => ({
		id: product.id.toString(),
	}));
}

export async function getSingleProduct(id) {
	const product = await fetch(`https://dummyjson.com/products/${id}`);

	return product.json();
}

export default async function SingleProduct({ params }) {
	const product = await getSingleProduct(params.id);

	return (
		<div>
			<DetailsProduct productInfo={product} />
		</div>
	);
}
