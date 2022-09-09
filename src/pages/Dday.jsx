import { memo, useEffect, useState } from "react";

import MainLayout from "layout/MainLayout";
import AddDday from "../Components/dday/Modal__AddDday";
import PostView from "Components/dday/PostView";
import ListView from "Components/dday/ListView";
import ActiveButton from "Components/ActiveButton";

import { clearDDay, findDays, findLeftTimes } from "js/dday";
import { FaCalendarPlus, FaListUl, FaRegWindowMaximize, FaTrash } from 'react-icons/fa';
import { changeObjVal } from "js/common";

const Dday = () => {
    const [nowTime, setNowTime] = useState(new Date());
    const [dayList, setDayList] = useState([]);
    const [filt, setFilt] = useState("all");
    const [viewMethod, setViewMethod] = useState("post");

    const [addModal, setAddModal] = useState(false);
    const [addState, setAddState] = useState({ title: "", dday: "", id: 0 })

    const addProps = { addState, setAddState, setAddModal, setDayList };

    // Mount_Fn : 사전에 파일이 있는 경우 가지고 옴
    // Mount_Fn : 현재 있는 파일들에 대해 초시계가 움직일 수 있도록 setInterval 설정
    useEffect(() => {
        const items = localStorage.getItem("dday");
        if (items) {
            const list = JSON.parse(items);
            setDayList(list);
            changeObjVal("id", Number(list[list.length - 1].id) + 1, setAddState);
        }
        const timer = setInterval(() => { setNowTime(new Date()); }, 1000);
        document.title = "D-Day Counter | 김성엽";
        return () => { clearInterval(timer) };
    }, [])
    const delDay = id => {
        const idx = dayList.findIndex(day => day.id === id);
        if (!window.confirm(`[${dayList[idx].title}]을(를) 지우시겠습니까?`)) return;
        setDayList(prev => {
            const clone = [...prev];
            clone.splice(idx, 1);
            localStorage.setItem("dday", JSON.stringify(clone));
            return clone;
        })
    }
    const renderDayList = () => {
        const lists = filt === "all" ? dayList : findDays(filt === "left" ? false : true, dayList);
        return lists.map(({ dday, title, id }, idx) => {
            const lefts = findLeftTimes(dday, nowTime);
            const liProps = { idx, title, dday, lefts, delDay: () => { delDay(id) } }
            return viewMethod === "post" ? <PostView {...liProps} key={`d_day_${idx}`} /> : <ListView {...liProps} key={`d_day_${idx}`} />
        })
    }
    return (
        <MainLayout id="d-day" cn="p-main">
            <header className="d-header">
                <div className="left">
                    <h2>D-Day Counter | Portfolio</h2>
                </div>
                <div className="right">
                    <button onClick={e => { setAddModal(true); e.stopPropagation(); }}>
                        <FaCalendarPlus />
                        <p onClick={e => { e.stopPropagation(); }}>추가</p>
                    </button>
                    <button className="clear" onClick={() => { clearDDay(setDayList) }}>
                        <FaTrash />
                        <p onClick={e => { e.stopPropagation(); }} >초기화</p>
                    </button>
                </div>
            </header>
            <aside className="d-helper">
                <div className="left">
                    <ActiveButton stand={filt} condition="all" changeFn={setFilt}>
                        <h5>전체 Days</h5><p>{dayList.length}</p>
                    </ActiveButton>
                    <ActiveButton stand={filt} condition="left" changeFn={setFilt}>
                        <div className="blue"></div><h5>남은 Days</h5><p>{findDays(false, dayList).length}</p>
                    </ActiveButton>
                    <ActiveButton stand={filt} condition="past" changeFn={setFilt}>
                        <div className="red"></div><h5>지난 Days</h5><p>{findDays(true, dayList).length}</p>
                    </ActiveButton>
                </div>
                <div className="right">
                    <ActiveButton stand={viewMethod} condition="post" changeFn={setViewMethod}>
                        <FaRegWindowMaximize />
                    </ActiveButton>
                    <ActiveButton stand={viewMethod} condition="list" changeFn={setViewMethod}>
                        <FaListUl />
                    </ActiveButton>
                </div>
            </aside>
            <ul className={viewMethod === "post" ? "d-day-list" : "d-day-list list"}>{renderDayList()}</ul>
            {addModal && <AddDday {...addProps} />}
        </MainLayout>
    )
}

export default memo(Dday);