import { FC } from "react";

const Page: FC<PageProps<'/birds/[[...param]]'>> = async ({
    params
}) => {
    const {param} = await params;
    const response = await getData(param && param[0]);


    return (
        <div>
            {response.length ? data.map(({bird, id}) => <div key={id} >
                <div>{bird}</div>   
            </div>) : "No bird found"}
        </div>
    )
}


async function getData(bird?: string): Promise<BirdType[]> {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const response = bird ? data.filter(b => b.bird === bird) : data;

            resolve(response);
        }, 5000);
    })
}

type BirdType = {
    id: number;
    bird: string;
}

const data = [{
    id: 1, 
    bird: "bird1"
}, {
    id: 2,
    bird: "bird2",
}, {
    id: 3,
    bird: "bird3"
}]


export default Page;