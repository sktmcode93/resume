import { memo } from "react";

import SideBar from 'Components/SideBar';

const Portfolio = () => {
    const changePage = (target) => { window.location.replace(`/${target}`); }
    return <div className="summary-container">
        <SideBar />
        <section className="pf-main">
            <main>
                <ul className="pf-list">
                    <li>
                        <div>
                            포폴1<br />
                            여기에 이후에 이미지 들감
                        </div>
                        <h5>포폴이름</h5>
                        <button>설명</button>
                        <button onClick={() => changePage("d-day-counter")}>이동하기</button>
                    </li>
                    <li>
                        <div>
                            포폴1<br />
                            여기에 이후에 이미지 들감
                        </div>
                        <h5>포폴이름</h5>
                        <button>설명</button>
                        <button onClick={() => changePage("todo-list")}>이동하기</button>
                    </li>
                    <li>
                        <div>
                            포폴1<br />
                            여기에 이후에 이미지 들감
                        </div>
                        <h5>포폴이름</h5>
                        <button>설명</button>
                        <button onClick={() => changePage("movie-bank")}>이동하기</button>
                    </li>
                </ul>
            </main>
        </section>
    </div>
}

export default memo(Portfolio);