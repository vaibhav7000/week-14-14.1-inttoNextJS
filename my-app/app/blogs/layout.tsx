import { RootLayoutType } from "@/utils/types/types";

const RootLayout: React.FC<LayoutProps<'/blogs'>> = async ({
    children,
    params
}) => {
    const value = await params;
    return (
        <div>
            {children}
        </div>
    )
}

export default RootLayout;