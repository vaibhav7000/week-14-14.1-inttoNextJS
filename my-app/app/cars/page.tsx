const AllCars: React.FC<{
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>
}> = async ({
    searchParams
}) => {

    const {cname} = await searchParams;

    return (
        <div>
            {!cname && "AllCars"}
            {cname}
        </div>
    )
}

export default AllCars;