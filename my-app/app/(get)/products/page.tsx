import { getProducts } from "@/lib/products";
import ProductComponent from "@/ui/Products";

const ListProducts = async () => {
    const posts = await getProducts();

    return (
        <>
            {<ProductComponent response={posts} />}
        </>
    )
    
}


export default ListProducts;