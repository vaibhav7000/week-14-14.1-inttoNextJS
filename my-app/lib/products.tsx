const getProducts: () => Promise<ProductsType[]> = async () => {
    try {
        const data = await fetch('https://fakestoreapi.com/products', {
            method: "GET"
        });

        const output = await data.json() as ProductsType[];

        return output
    } catch (e) {
        throw e;
    }
}


interface ProductsType {
    id: number;
    title: string;
    price: number;
    description: string;
}


export {
    getProducts,
    type ProductsType
}
