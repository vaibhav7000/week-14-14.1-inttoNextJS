"use client"

import { useSearchParams } from "next/navigation";

const Page: React.FC = () => {
    const cname = useSearchParams().get("cname");
    console.log(cname)
    return (
        <div className="text-center text-3xl font-medium">
            {cname}
        </div>
    )
}


export default Page;