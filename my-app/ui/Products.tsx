import { ProductsType } from "@/lib/products";

const ProductComponent: React.FC<{
    response: ProductsType[]
}> = (products) => {

    const {response} = products;

    return <div>
        {response.map(data => <div key={data.id}>
            <div>{data.title}</div>
            <div>{data.description}</div>
            <div>{data.price}</div>
        </div>)}
    </div>
}

export default ProductComponent;