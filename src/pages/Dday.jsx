import { memo, useEffect, useState } from "react";

import MainLayout from "layout/MainLayout";
import AddDday from "../Components/dday/Modal__AddDday";

import { clearDDay, findLeftTimes } from "js/dday";
import { FaCalendarPlus } from 'react-icons/fa';
import { changeObjVal } from "js/common";

const Dday = () => {
    const [nowTime, setNowTime] = useState(new Date());
    const [dayList, setDayList] = useState([]);
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
    return (
        <MainLayout id="d-day">
            <aside className="d-day-control">
                <div className="left"></div>
                <div className="right">
                    <button onClick={e => { setAddModal(true); e.stopPropagation(); }}><FaCalendarPlus />새 디데이</button>
                    <button onClick={() => { clearDDay(setDayList) }}>데이터 초기화</button>
                </div>
            </aside>
            <ul className="d-day-list">
                {dayList.map(({ title, dday, id }, idx) => {
                    const lefts = findLeftTimes(dday, nowTime);
                    return <li key={`d_day_${idx}`}>
                        <div className="top">
                            <h3>{title}</h3>
                            <button onClick={() => { delDay(id) }}>X</button>
                        </div>
                        <h4>{dday}</h4>
                        <ol className="times">
                            {Object.keys(lefts).map(k => <li key={`d_day_${idx}_${k}`}>
                                <h5>{lefts[k]}</h5>
                                <p>{k}</p>
                            </li>)}
                        </ol>
                    </li>
                })}
            </ul>
            {addModal && <AddDday {...addProps} />}
        </MainLayout>
    )
}

export default memo(Dday);