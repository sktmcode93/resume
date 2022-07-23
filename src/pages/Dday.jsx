import { memo, useEffect, useState } from "react";

import SiteMap from 'Components/SiteMap';
import AddDday from "../Components/dday/Modal__AddDday";

import { clearDDay, findLeftTimes } from "js/dday";
import { FaCalendarPlus } from 'react-icons/fa';

const Dday = () => {
    const [nowTime, setNowTime] = useState(new Date());
    const [dayList, setDayList] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [addState, setAddState] = useState({ title: "", dday: "" })

    const addProps = { addState, setAddState, setAddModal, setDayList };

    // Mount_Fn : 사전에 파일이 있는 경우 가지고 옴
    // Mount_Fn : 현재 있는 파일들에 대해 초시계가 움직일 수 있도록 setInterval 설정
    useEffect(() => {
        const items = localStorage.getItem("dday");
        if (items) setDayList(JSON.parse(items));
        const timer = setInterval(() => { setNowTime(new Date()); }, 1000);
        return () => { clearInterval(timer) };
    }, [])

    return <main id="d-day">
        <div className="container">
            <aside className="d-day-control">
                <div className="left"></div>
                <div className="right">
                    <button onClick={e => { setAddModal(true); e.stopPropagation(); }}><FaCalendarPlus />새 디데이</button>
                    <button onClick={() => { clearDDay(setDayList) }}>데이터 초기화</button>
                </div>
            </aside>
            <ul className="d-day-list">
                {dayList.map(({ title, dday }, idx) => {
                    const lefts = findLeftTimes(dday, nowTime);
                    return <li key={`d_day_${idx}`}>
                        <h3>{title}</h3>
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
        </div>
        <SiteMap />
        {addModal && <AddDday {...addProps} />}
    </main>
}

export default memo(Dday);