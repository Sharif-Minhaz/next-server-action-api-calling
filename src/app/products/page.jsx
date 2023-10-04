import SingleProduct from "@/components/product/SingleProduct";

export async function getAllProducts() {
	const products = await fetch("https://dummyjson.com/products");

	return products.json();
}

export default async function Product() {
	const data = await getAllProducts();

	return (
		<main>
			{data.products.map((product) => (
				<SingleProduct key={product.id} productInfo={product} />
			))}
		</main>
	);
}
