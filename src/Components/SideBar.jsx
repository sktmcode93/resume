import { memo } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import { FaLaptop, FaRegUserCircle, FaTools } from "react-icons/fa";

const SideBar = () => {
    const { pathname } = useLocation();

    return <aside className="side-bar">
        <div className="img-box">
        </div>
        <div className="name-box">
            <h1>김성엽</h1>
            <h2>프론트엔드 개발자</h2>
        </div>
        <ul className="nav-list">
            <li className={pathname === "/resume" ? "active" : ""}>
                <Link to="/resume"><FaRegUserCircle /><span>소개</span></Link>
            </li>
            <li className={pathname === "/resume/skills" ? "active" : ""}>
                <Link to="/resume/skills"><FaTools /><span>기술</span></Link>
            </li>
            <li className={pathname === "/resume/portfolio" ? "active" : ""}>
                <Link to="/resume/portfolio"><FaLaptop /><span>포트폴리오</span></Link>
            </li>
        </ul>
        <div></div>
    </aside>
}

export default memo(SideBar);