import { memo } from "react"

const PortList = ({ image, title, targetPage, children }) => {
    const changePage = target => { window.location.replace(`/${target}`); }
    return <li>
        <div className="image-box">
            <img src={image} alt={title} />
        </div>
        <div className="explain">
            <nav>
                <h5>{title}</h5>
                <button className="btn-type1" onClick={() => changePage(targetPage)}>페이지로 이동하기</button>
            </nav>
            <div>{children}</div>
        </div>
    </li>
}

export default memo(PortList);