import { memo } from "react";
import { useLocation } from "react-router";

import { FaHome } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SiteMap = () => {
    const { pathname } = useLocation();
    return <nav className="site-map">
        <ul>
            <li>
                <Link to="/resume"><FaHome /></Link>
                <p className="down">홈으로 가기</p>
            </li>
            {
                pathname !== "/resume/d-day-counter" && <li>
                    <Link to="/resume/d-day-counter"><div>DD</div></Link>
                    <p>d-day<br />포폴로 가기</p>
                </li>
            }
            {
                pathname !== "/resume/todo-list" && <li>
                    <Link to="/resume/todo-list"><div>TL</div></Link>
                    <p>todo-list<br />포폴로 가기</p>
                </li>
            }
            {
                pathname !== "/resume/movie-bank" && <li>
                    <Link to="/resume/movie-bank"><div>MV</div></Link>
                    <p>movie-bank<br />포폴로 가기</p>
                </li>
            }
        </ul>
    </nav>
}

export default memo(SiteMap);