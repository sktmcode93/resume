import { memo, useEffect } from "react";

import HomeLayout from "layout/HomeLayout";
import TableLayout from "layout/TableLayout";

const Home = () => {
    const calWorkDays = () => {
        const secs = (new Date("2022-08-05").getTime()) - (new Date("2021-06-14").getTime());
        const months = Math.floor(secs / 1000 / 60 / 60 / 24 / 30);
        return `${months > 12 ? Math.floor(months / 12) + "년 " : ""}${months % 12 === 0 ? "" : months % 12 + "개월"}`;
    }

    useEffect(() => { document.title = "김성엽"; }, []);

    return (
        <HomeLayout cn="home h-main">
            <article className="page intro">
                <h2>안녕하세요 프론트엔드 개발자 김성엽입니다.</h2>
                <p className="work-days">[경력]</p>
                <div className="work-place"><a href="https://markcloud.co.kr/">마크클라우드</a> 2021. 06. 14 ~ 2022. 08. 05 ({calWorkDays()})</div>
            </article>
            <article className="page counts">
                <h3>저는 업무와 관련하여 다음과 같이 참여했었습니다.</h3>
                <TableLayout cn="table-type1" ths={["참여한 프로젝트", "담당한 업무", "사용한 라이브러리", "비고"]}>
                    <tr>
                        <td><h4>상표 검색 서비스</h4></td>
                        <td className="did">
                            <p>- 레거시 코드 변경 (PHP -&gt; React)</p>
                            <p>- 텍스트 검색 API (Elastic-search, 몽고DB)</p>
                            <p>- 이미지 검색 API (multi-formdata 형식으로 통신)</p>
                            <p>- 이미지 검색을 위한 이미지 조정(Canvas를 활용하여 사각형, 원형, 다각형으로 크롭)</p>
                            <p>- 통신을 통해 원하는 데이터들을 엑셀 형식으로 다운로드</p>
                            <p>- 출력하고자 하는 데이터들을 react-to-print를 사용하여 인쇄</p>
                        </td>
                        <td>
                            <p>axios</p>
                            <p>elastic-builder</p>
                            <p>elasticsearch</p>
                            <p>exceljs</p>
                            <p>file-saver</p>
                            <p>http-proxy-middleware</p>
                            <p>jquery</p>
                            <p>react-calendar</p>
                            <p>react-cookie</p>
                            <p>react-docx</p>
                            <p>react-router</p>
                            <p>react-router-dom</p>
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
                        <td><h4>이미지 가공을 위한 크롭툴<br />(국가 사업)</h4></td>
                        <td className="did">
                            <p>- 레거시 코드 변경 (외주 받아왔던 코드를 불필요한 기능 제거와 필요한 기능을 추가)</p>
                            <p>- leaflet을 활용하여 crop 좌표를 전송</p>
                            <p>- Back과의 통신을 통해 받아온 좌표들을 가공자가 볼 수 있도록 웹에 표시</p>
                            <p>- 가공자의 작업속도 향상을 위해 react-shortcut으로 단축키 연결</p>
                            <p>- 가공할 이미지들을 관리자가 DB에 업로드할 수 있도록 API 구성</p>
                            <p>- 1차 작업 -&gt; 1차 검수 -&gt; 2차 작업 -&gt; 2차 검수의 과정이 있기에 진행 과정에 따라 접근이 제한 되도록 구성</p>
                        </td>
                        <td>
                            <p>axios</p>
                            <p>jquery</p>
                            <p>leaflet</p>
                            <p>leaflet-path-drag</p>
                            <p>react-leaflet</p>
                            <p>react-icons</p>
                            <p>react-router</p>
                            <p>react-router-dom</p>
                            <p>react-shortcut</p>
                            <p>universal-cookie</p>
                        </td>
                        <td>-</td>
                    </tr>
                </TableLayout>
            </article>
        </HomeLayout>
    )


}

export default memo(Home);