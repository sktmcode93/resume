import SideBar from "Components/SideBar";

const HomeLayout = ({ children, cn }) => {
    return <main className={cn}>
        <SideBar />
        <section>
            {children}
        </section>
    </main>
}
export default HomeLayout;