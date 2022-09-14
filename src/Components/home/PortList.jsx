import { memo } from "react"
import { Link } from "react-router-dom";

const PortList = ({ image, title, targetPage, children }) => {
    const changePage = target => { window.location.replace(`/${target}`); }
    return <li>
        <div className="image-box">
            <img src={image} alt={title} />
        </div>
        <div className="explain">
            <nav>
                <h5>{title}</h5>
                <Link to={targetPage}>페이지로 이동하기</Link>
            </nav>
            <div>{children}</div>
        </div>
    </li>
}

export default memo(PortList);