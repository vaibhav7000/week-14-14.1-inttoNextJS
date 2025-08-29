import { isString } from "util";

const AllBlogs = async ({
    params,
    searchParams,
}: {
    params: Promise<{blogId: string}>,
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}) => {
    const { blogId } = await params;

    const {category, latest} = await searchParams;

    const data = await getData(3) as string; // when this will be completed we will get the html file back

    return (
        <div>
            {data}

            <div>
                {blogId}
            </div>

            <div>
                {category && Array.isArray(category) && category.map((value, index) => {
                    return (
                        <div key={index}>
                            {value}
                        </div>
                    )
                }) }

                {latest}
            </div>
        </div>
    )
}

export default AllBlogs;


function getData(timer: number) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("all data is fetched");
        }, timer * 1000)
    })
}