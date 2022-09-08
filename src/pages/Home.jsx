import { memo } from "react";


import HomeLayout from "layout/HomeLayout";
import DocsCounts from "../Components/home/DocsCounts";
import TableLayout from "layout/TableLayout";

const Home = () => {
    const calWorkDays = () => {
        const secs = (new Date("2022-08-05").getTime()) - (new Date("2021-06-14").getTime());
        const months = Math.floor(secs / 1000 / 60 / 60 / 24 / 30);
        return `${months > 12 ? Math.floor(months / 12) + "년 " : ""}${months % 12 === 0 ? "" : months % 12 + "개월"}`;
    }

    return (
        <HomeLayout cn="home p-main">
            <article className="page intro">
                <h2>안녕하세요 프론트엔드 개발자 김성엽입니다.</h2>
                <p className="work-days">[경력]</p>
                <div className="work-place"><a href="https://markcloud.co.kr/">마크클라우드</a> 2021. 06. 14 ~ 2022. 08. 05 ({calWorkDays()})</div>
            </article>
            <article className="page counts">
                <h3>저는 업무와 관련하여 다음과 같이 참여했었습니다.</h3>
                <TableLayout cn="table-type1" ths={["참여한 프로젝트", "사용한 라이브러리", "비고"]}>
                    <tr>
                        <td>상표 검색 서비스</td>
                        <td>
                            <p>axios</p>
                            <p>elastic-builder</p>
                            <p>elasticsearch</p>
                            <p>exceljs</p>
                            <p>file-saver</p>
                            <p>http-proxy-middleware</p>
                            <p>jquery</p>
                            <p>print-js</p>
                            <p>react-calendar</p>
                            <p>react-cookie</p>
                            <p>react-docx</p>
                            <p>react-hotkeys-hook</p>
                            <p>react-new-window</p>
                            <p>react-sortable-hoc</p>
                            <p>react-to-print</p>
                            <p>sass</p>
                            <p>universal-cookie</p>
                        </td>
                        <td><a href="https://markcloud.co.kr/">사이트로 이동</a></td>
                    </tr>
                    <tr>
                        <td>국가 사업 솔루션</td>
                        <td>200</td>
                        <td>
                            6개 사업 참여<br />
                            4개 주도 <br />
                            2개 보조
                        </td>
                    </tr>
                </TableLayout>
            </article>
        </HomeLayout>
    )

    // <div className="summary-container">
    //     <section className="home">
    //         <main>


    //         </main>
    //     </section>
    // </div>
}

export default memo(Home);