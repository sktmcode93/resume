import { memo, useCallback, useEffect, useState } from "react";

import SiteMap from 'Components/SiteMap';

import { FaCalendarPlus } from 'react-icons/fa';
import AddDday from "./AddDday";

const Dday = () => {
    const [dayList, setDayList] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [addState, setAddState] = useState({ title: "", dday: "" })

    const addProps = { addState, setAddState, setAddModal, setDayList };

    useEffect(() => {
        const items = localStorage.getItem("dday");
        if (items) setDayList(JSON.parse(items));
    }, [])

    const renderDayList = useCallback(() => {
        const today = new Date();
        return dayList.reduce((acc, { title, dday }) => {
            const wholeTime = parseInt(((new Date(dday)) - today) / 1000);
            console.log(wholeTime);
            return <>
                {acc}
                <li>
                    <h5>{title}</h5>

                </li>
            </>
        }, <></>)
    }, [dayList]);
    return <section className="d-day">
        <div className="container">
            <aside className="d-day-control">
                <div className="left"></div>
                <div className="right"><button onClick={(e) => { setAddModal(true); e.stopPropagation(); }}><FaCalendarPlus />새 디데이</button></div>
            </aside>
            <ul className="d-day-list">
                {renderDayList()}
            </ul>
        </div>
        <SiteMap />
        {addModal && <AddDday {...addProps} />}
    </section>
}

export default memo(Dday);