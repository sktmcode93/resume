import $ from 'jquery';
import { memo, useEffect } from "react";

import ModalLayout1 from "layout/ModalLayout1";

import { changeObjVal } from "js/common";

const AddDday = ({ addState, setAddState, setAddModal, setDayList }) => {
    const complete = () => {
        setDayList(prev => {
            const clone = [...prev];
            clone.push(addState);
            localStorage.setItem("dday", JSON.stringify(clone));
            return clone;
        })
        setAddModal(false);
        const newId = Number(addState.id) + 1;
        setAddState({ title: "", dday: "", id: newId });
    }

    useEffect(() => {
        $(".add-d-day .name").focus();
    }, [])

    return (
        <ModalLayout1
            cn="add-d-day modal-type1"
            setModal={setAddModal}
            title="New D-Day"
        >
            <label>
                <h5>디데이명</h5>
                <input type="text" value={addState.title} onChange={e => changeObjVal("title", e.target.value, setAddState)} className="name" />
            </label>
            <label>
                <h5>날짜</h5>
                <input type="date" value={addState.dday} onChange={e => changeObjVal("dday", e.target.value, setAddState)} />
            </label>
            <div>
                <button onClick={complete} className="btn-type1">추가하기</button>
            </div>
        </ModalLayout1>
    )
}

export default memo(AddDday);