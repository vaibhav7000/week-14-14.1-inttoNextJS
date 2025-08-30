import { RootLayoutType } from "@/utils/types/types";
import { FC } from "react";

const Layout: FC<RootLayoutType> = (props) => {
    const {children} = props;

    return (
        <>
            {children}
        </>
    )
}

export default Layout;