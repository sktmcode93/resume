import { changeObjVal } from "js/common";
import { memo, useEffect } from "react";

const AddDday = ({ addState, setAddState, setAddModal, setDayList }) => {
    const outFn = ({ path }) => {
        for (let { className } of path) {
            if (className && className === "add-d-day") return;
        }
        window.removeEventListener("click", outFn);
        setAddModal(false);
    }
    useEffect(() => { window.addEventListener("click", outFn); }, []);

    const complete = () => {
        setDayList(prev => {
            const clone = [...prev];
            clone.push(addState);
            localStorage.setItem("dday", JSON.stringify(clone));
            return clone;
        })
        window.removeEventListener("click", outFn);
        setAddModal(false);
        setAddState({ title: "", dday: "" })
    }
    return <section className="add-d-day">
        <label>
            <h5>디데이명</h5>
            <input type="text" value={addState.title} onChange={e => changeObjVal("title", e.target.value, setAddState)} />
        </label>
        <label>
            <h5>날짜</h5>
            <input type="date" value={addState.dday} onChange={e => changeObjVal("dday", e.target.value, setAddState)} />
        </label>
        <div>
            <button onClick={complete}>추가하기</button>
        </div>
    </section>
}

export default memo(AddDday);