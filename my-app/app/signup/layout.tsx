import { RootLayoutType } from "@/utils/types/types";

const RootLayout: React.FC<RootLayoutType> = (props) => {
    return (
        <div>
            <div className="text-center" >20% off on all courses</div>
            {props.children}
        </div>
    )
}

export default RootLayout;