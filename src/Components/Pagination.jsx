import { findParaThroughPage } from "js/common";
import { memo, useState } from "react";
import { icon_left_arrow, icon_right_arrow } from 'styles/Icons';

const Pagination = ({ pageInfo, setPageInfo, fromClass }) => {
    const [pageNumber, setPageNumber] = useState("");
    // 부모컴포넌트의 종류에 따라 페이지 변경 함수가 달리 작용 됨
    const changePage = (p) => {
        if (fromClass) setPageInfo(p);
        else {
            setPageInfo(prev => {
                const clone = { ...prev };
                clone.page = p;
                return clone;
            })
        }
    }
    // 페이지를 입력하여 이동할 때 사용 하는 함수
    const movePage = () => {
        const parsing = Number(pageNumber);
        if (!/\d/.test(pageNumber)) {
            alert("숫자만 넣어주시기 바랍니다.");
            return;
        }
        if (parsing <= 0 || parsing > pageInfo.totalPage) alert("올바른 범위로 넣으시오.");
        else changePage(parsing);
    }
    const changePara = direction => {
        if (!direction) return;
        const nowPara = Math.floor((pageInfo.page - 1) / 10);
        changePage(direction === "prev" ? nowPara * 10 : (nowPara + 1) * 10 + 1);
    }
    const keyFn = e => {
        if (e.keyCode === 13) movePage();
    }
    const renderPagination = () => {
        const { totalPage, page } = pageInfo;
        const para = findParaThroughPage(page);
        const prevCheck = page > 10;
        const prev = <li className={prevCheck ? "arrow" : "arrow disabled"} onClick={() => changePara(prevCheck ? "prev" : null)}>{icon_left_arrow} prev</li>;
        const middle = new Array(10).fill(para * 10).reduce((acc, cur, idx) => {
            const nowPage = cur + idx + 1;
            return <>
                {acc}
                {nowPage <= totalPage && <li onClick={() => changePage(nowPage)} className={nowPage === page ? "active" : ""}>{nowPage}</li>}
            </>
        }, <></>);
        const nextCheck = (((para + 1) * 10 + 1)) <= totalPage;
        const next = <li className={nextCheck ? "arrow" : "arrow disabled"} onClick={() => changePara(nextCheck ? "next" : null)}>next {icon_right_arrow}</li>;
        return <>{prev}{middle}{next}</>
    }
    return <ol className="a-pagination">
        <ol>{renderPagination()}</ol>
        <div>
            <input type="text" id='v-move-page' value={pageNumber} onChange={e => setPageNumber(e.target.value)} onKeyDown={keyFn} />
            <span>/</span>
            <h5>{pageInfo.totalPage}</h5>
            <button onClick={movePage}>이동</button>
        </div>
    </ol>
};

export default memo(Pagination);
