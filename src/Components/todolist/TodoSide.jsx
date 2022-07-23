import $ from 'jquery';
import { memo, useEffect, useState } from "react"

import { errorList } from "js/array";

const TodoSide = () => {
    const [cateList, setCateList] = useState(["공부", "업무", "운동"]);
    const [selectCate, setSelectCate] = useState("0");

    const [addCate, setAddCate] = useState(false);
    const [newCateName, setNewCateName] = useState("");

    const updateLocalStroage = lists => {
        const forSaveData = lists.reduce((acc, cur) => `${acc}&|구분자|&${cur}`, "").substring(7);
        localStorage.setItem("todo_cateList", forSaveData);
    }

    // 카테고리를 추가하는 함수
    const addCategoryFn = () => {
        try {
            if (!newCateName.trim()) throw new Error("todo_fill_category");
            if (newCateName === "추가하기" || newCateName === "---") throw new Error("todo_reserved_category")
            for (let i = 0; i < cateList.length; i++) {
                if (cateList.includes(newCateName)) throw new Error("todo_duple");
            }
            setCateList(cl => {
                const clone = [...cl];
                clone.push(newCateName);
                updateLocalStroage(clone);
                return clone;
            })
            setAddCate(false);
            setNewCateName("");
        } catch (error) {
            alert(errorList[error?.message] || "오류가 발생했습니다.\n잠시 후 다시 시도해주세요.");
        }
    }
    const delCateFn = () => {
        if (selectCate === "0") {
            alert(errorList["todo_delete_standard"]);
            return;
        }
        const target = Number(selectCate) - 1;
        if (!window.confirm(`${cateList[target]}을(를) 삭제하시겠습니까?`)) return;
        setSelectCate("0");
        setCateList(cl => {
            const clone = [...cl];
            clone.splice(target, 1);
            updateLocalStroage(clone);
            return clone;
        })
    }

    const keyFn = e => {
        if (e.keyCode === 13) addCategoryFn();
    }

    useEffect(() => {
        if (Number(selectCate) === cateList.length + 1) {
            setAddCate(true);
            setTimeout(() => { $(".todo-add-target").focus(); }, 100)
        }
    }, [selectCate]);
    useEffect(() => {
        if (!localStorage.getItem("todo_cateList")) return;
        const savedDatas = localStorage.getItem("todo_cateList").split("&|구분자|&");
        setCateList(savedDatas);
    }, [])

    return <aside>
        <h2>TodoList</h2>
        <ul>
            <li>
                <h4>카테고리</h4>
                <div>
                    {addCate ? <>
                        <input type="text" value={newCateName} onChange={e => { setNewCateName(e.target.value) }} onKeyDown={keyFn} className="todo-add-target" />
                        <button onClick={addCategoryFn}>항목추가</button>
                    </> :
                        <>
                            <select value={selectCate} onChange={e => { setSelectCate(e.target.value) }}>
                                <option value="0">---</option>
                                {cateList.map((cur, idx) => <option value={idx + 1} key={`cate_opt_${idx}`}>{cur}</option>)}
                                <option value={String(cateList.length + 1)}>추가하기</option>
                            </select>
                            <button onClick={delCateFn}>항목제거</button>
                        </>
                    }
                </div>
            </li>
        </ul>
    </aside>
}

export default memo(TodoSide);