import { errorList } from "js/array";
import { memo, useEffect, useState } from "react"

const TodoSide = () => {
    const [cateList, setCateList] = useState(["---", "공부", "업무", "운동", "추가하기"]);
    const [selectCate, setSelectCate] = useState("0");

    const [addCate, setAddCate] = useState(false);
    const [newCateName, setNewCateName] = useState("");

    const addCategoryFn = () => {
        try {
            if (!newCateName.trim()) throw new Error("todo_fill_category");
            if (newCateName === "추가하기" || newCateName === "---") throw new Error("todo_reserved_category")
            const targetList = cateList.slice(1);
            for (let i = 0; i < targetList.length - 1; i++) {
                if (cateList.includes(newCateName)) console.log(newCateName);
            }

        } catch (error) {
            alert(errorList[error?.message] || "오류가 발생했습니다.\n잠시 후 다시 시도해주세요.");
        }
    }

    useEffect(() => {
        if (Number(selectCate) === cateList.findIndex(cate => cate === "추가하기")) setAddCate(true);
    }, [selectCate]);
    return <aside>
        <h2>TodoList</h2>
        <ul>
            <li>
                <h4>카테고리</h4>
                {addCate ? <>
                    <input type="text" value={newCateName} onChange={e => { setNewCateName(e.target.value) }} />
                    <button onClick={addCategoryFn}>+</button>
                </> :
                    <select value={selectCate} onChange={e => { setSelectCate(e.target.value) }}>
                        {cateList.map((cur, idx) => <option value={idx} key={`cate_opt_${idx}`}>{cur}</option>)}
                    </select>
                }
            </li>
        </ul>
    </aside>
}

export default memo(TodoSide);