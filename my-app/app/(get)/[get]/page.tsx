import { CartType, Data, getData, UserType } from "@/ui/getData";
import { FC } from "react";

const GetSpeific: FC<{
    params: Promise<{
        get: Data
    }>
}> = async ({params}) => {

    const { get } = await params;
    let data: CartType[] | UserType = [];

    try {
        data = await getData(get);
    } catch (error) {
        
    }


    return (
        <div>
            {data.map(d => d.id)}
        </div>
    )
}


export default GetSpeific;