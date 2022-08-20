import SiteMap from "Components/SiteMap";
import { memo } from "react"

const MainLayout = ({ id, children }) => {
    return <main id={id}>
        <div className="container">
            {children}
        </div>
        <SiteMap />
    </main>
}

export default memo(MainLayout);