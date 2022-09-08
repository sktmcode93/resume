import { memo } from "react"

import SiteMap from "Components/SiteMap";

const MainLayout = ({ id, children, cn }) => {
    return <main id={id} className={cn}>
        <div className="container">
            {children}
        </div>
        <SiteMap />
    </main>
}

export default memo(MainLayout);