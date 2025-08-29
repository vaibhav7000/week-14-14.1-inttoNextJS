import { RootLayoutType } from "@/utils/types/types";

const RootLayout: React.FC<RootLayoutType> = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default RootLayout;