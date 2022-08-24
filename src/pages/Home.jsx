import HomeLayout from "layout/HomeLayout";
import { memo } from "react";
import DocsCounts from "../Components/home/DocsCounts";

const Home = () => {
    const calWorkDays = () => {
        const secs = (new Date().getTime()) - (new Date("2021-06-14").getTime());
        const months = Math.floor(secs / 1000 / 60 / 60 / 24 / 30);
        return `${months > 12 ? Math.floor(months / 12) + "년 " : ""}${months % 12 === 0 ? "" : months % 12 + "개월"}`;
    }
    return (
        <HomeLayout cn="home p-main">

        </HomeLayout>
    )

    // <div className="summary-container">
    //     <section className="home">
    //         <main>
    //             <h2>안녕하세요 프론트엔드 개발자 김성엽입니다.</h2>
    //             <div className="work-days">저는 2021년 06월 14일부터 개발을 시작하였습니다. ({calWorkDays()})</div>
    //             <div className="counts">
    //                 <h3>저는 업무와 관련하여..</h3>
    //                 <table>
    //                     <thead>
    //                         <tr>
    //                             <th>참여한 프로젝트</th>
    //                             <th>작성한 문서 수</th>
    //                             <th>사용한 라이브러리</th>
    //                             <th>비고</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         <tr>
    //                             <td>상표 검색 서비스</td>
    //                             <td><DocsCounts ds={[1, 46, 10, 6, 7]} /></td>
    //                             <td>
    //                                 <p>axios</p>
    //                                 <p>elastic-builder</p>
    //                                 <p>elasticsearch</p>
    //                                 <p>exceljs</p>
    //                                 <p>file-saver</p>
    //                                 <p>http-proxy-middleware</p>
    //                                 <p>jquery</p>
    //                                 <p>print-js</p>
    //                                 <p>react-calendar</p>
    //                                 <p>react-cookie</p>
    //                                 <p>react-docx</p>
    //                                 <p>react-hotkeys-hook</p>
    //                                 <p>react-new-window</p>
    //                                 <p>react-sortable-hoc</p>
    //                                 <p>react-to-print</p>
    //                                 <p>sass</p>
    //                                 <p>universal-cookie</p>
    //                             </td>
    //                             <td><a href="https://markcloud.co.kr/">사이트로 이동</a></td>
    //                         </tr>
    //                         <tr>
    //                             <td>국가 사업 솔루션</td>
    //                             <td>100</td>
    //                             <td>200</td>
    //                             <td>
    //                                 6개 사업 참여<br />
    //                                 4개 주도 <br />
    //                                 2개 보조
    //                             </td>
    //                         </tr>
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </main>
    //     </section>
    // </div>
}

export default memo(Home);