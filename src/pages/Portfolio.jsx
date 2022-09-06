import { memo } from "react";

import HomeLayout from "layout/HomeLayout";

const Portfolio = () => {
    const changePage = (target) => { window.location.replace(`/${target}`); }
    return <HomeLayout cn="portfolio p-main">
        <ul className="pf-list">
            <li>
                <div>
                    디데이<br />
                    여기에 이후에 이미지 들감
                </div>
                <h5>D-Day Counter</h5>
                <button>설명</button>
                <button onClick={() => changePage("d-day-counter")}>이동하기</button>
            </li>
            <li>
                <div>
                    투두리스트<br />
                    여기에 이후에 이미지 들감
                </div>
                <h5>Todo List</h5>
                <button>설명</button>
                <button onClick={() => changePage("todo-list")}>이동하기</button>
            </li>
            <li>
                <div>
                    영화검색<br />
                    여기에 이후에 이미지 들감
                </div>
                <h5>Movie Bank</h5>
                <button>설명</button>
                <button onClick={() => changePage("movie-bank")}>이동하기</button>
            </li>
        </ul>
    </HomeLayout>
}

export default memo(Portfolio);