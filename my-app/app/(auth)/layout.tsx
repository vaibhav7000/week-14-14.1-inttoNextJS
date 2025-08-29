import { RootLayoutType } from "@/utils/types/types";
import React from "react";

const AuthRootLayout: React.FC<RootLayoutType> = (props) => {
    
    return (
        <div className="bg-blue-400 h-[100%] w-full">
            <div className="">
                20% off on all Courses
            </div>

            <div>
                {props.children}
            </div>
        </div>
    )
}


export default AuthRootLayout;