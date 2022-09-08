import SideBar from "Components/SideBar";

const HomeLayout = ({ children, cn }) => {
    return <main className={cn}>
        <SideBar />
        <section className="scroll-design1">
            {children}
        </section>
    </main>
}
export default HomeLayout;