import { memo, useState } from "react";

import SiteMap from 'Components/SiteMap';

import { FaCalendarPlus } from 'react-icons/fa';
import AddDday from "./AddDday";

const Dday = () => {
    const [dayList, setDayList] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [addState, setAddState] = useState({ title: "", dday: "" })

    const addProps = { addState, setAddState, setAddModal, setDayList };
    return <section className="d-day">
        <div className="container">
            <aside className="d-day-control">
                <div className="left"></div>
                <div className="right"><button onClick={(e) => { setAddModal(true); e.stopPropagation(); }}><FaCalendarPlus />새 디데이</button></div>
            </aside>
            <ul>
                {dayList.reduce((acc, { title, dday }) => <>{acc}<li>{title}, {dday}</li></>, <></>)}
            </ul>
        </div>
        <SiteMap />
        {addModal && <AddDday {...addProps} />}
    </section>
}

export default memo(Dday);