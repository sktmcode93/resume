import { memo } from "react";

const ModalLayout1 = ({ children, cn, title, setModal }) => {
    return <section className={cn}>
        <header>
            <h3>{title}</h3>
            {setModal && <button onClick={() => { setModal(false) }}></button>}
        </header>
        <article>
            {children}
        </article>
    </section>
}

export default memo(ModalLayout1);