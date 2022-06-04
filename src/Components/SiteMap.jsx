import { memo } from "react";
import { useLocation } from "react-router";

import { FaHome } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SiteMap = () => {
    const { pathname } = useLocation();
    return <nav className="site-map">
        <ul>
            <li>
                <Link to="/"><FaHome /></Link>
                <p className="down">홈으로 가기</p>
            </li>
            {
                pathname !== "/d-day-counter" && <li>
                    <Link to="/d-day-counter"><div>DD</div></Link>
                    <p>d-day<br />포폴로 가기</p>
                </li>
            }
            {
                pathname !== "/todo-list" && <li>
                    <Link to="/todo-list"><div>TL</div></Link>
                    <p>todo-list<br />포폴로 가기</p>
                </li>
            }
            {
                pathname !== "/movie-bank" && <li>
                    <Link to="/movie-bank"><div>MV</div></Link>
                    <p>movie-bank<br />포폴로 가기</p>
                </li>
            }
        </ul>
    </nav>
}

export default memo(SiteMap);