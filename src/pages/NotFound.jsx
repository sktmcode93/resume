import { memo } from "react";
import { Link } from "react-router-dom";

import { FaRegSadCry, FaRunning } from 'react-icons/fa';

const NotFound = () => {
    return <div className="_404">
        <h2>404 NOT FOUND</h2>
        <p>경로가 잘못되었습니다. <FaRegSadCry /></p>
        <Link to="/">홈으로 돌아가기 <FaRunning /></Link>
    </div>
}

export default memo(NotFound);