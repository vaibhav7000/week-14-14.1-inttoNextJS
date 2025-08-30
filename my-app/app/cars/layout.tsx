import { RootLayoutType } from "@/utils/types/types";

const RootLayout: React.FC<RootLayoutType> = (props) => {

    return (
        <div className="h-screen bg-blue-400">
            {props.children}
        </div>
    )
}

export default RootLayout;