type Data = "users" | "carts";

const getData = async (type: Data): Promise<CartType[] | UserType[]> => {
    try {
        const url = `https://fakestoreapi.com/${type}`;

        const data = await fetch(url);

        const output = await data.json();

        switch(type) {
            case "carts":
                return output as UserType[]
            case "users":
                return output as CartType[];
        }
    } catch (e) {
        throw e;
    }
}

interface UserType {
    id: number
}

interface CartType {
    id: number
}


export {
    type UserType,
    type CartType,
    type Data,
    getData
}