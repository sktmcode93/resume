import { memo } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import myImg from 'images/김성엽.jpg';

const SideBar = () => {
    const { pathname } = useLocation();
    return <aside className="side-bar">
        <div className="img-box">
            <img src={myImg} alt="증명사진" />
        </div>
        <div className="name-box">
            <h1>김성엽</h1>
            <h2>프론트엔드 개발자</h2>
        </div>
        <ul className="nav-list">
            <li className={pathname === "/" ? "active" : ""}><Link to="/">소개</Link></li>
            <li className={pathname === "/skills" ? "active" : ""}><Link to="/skills">기술</Link></li>
            <li className={pathname === "/portfolio" ? "active" : ""}><Link to="/portfolio">포트폴리오</Link></li>
        </ul>
    </aside>
}

export default memo(SideBar);