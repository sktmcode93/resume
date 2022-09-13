import { useEffect, useState, useRef } from "react";

import MainLayout from "layout/MainLayout";

import initData from 'json/today-todolist.json';
import emptyData from 'json/empty-todolist.json';
import { todo_colors } from "js/array";


const TodoList = () => {
    const [todayList, setTodayList] = useState([]);

    const typing = useRef(setTimeout(() => { }, 200));

    // Mount_Fn : 진입시 데이터가 있으면 사용 없으면 초기값 셋
    useEffect(() => {
        const checkStorage = localStorage.getItem("todo-list");
        if (checkStorage) setTodayList(JSON.parse(checkStorage));
        else setTodayList(initData.datas);
    }, []);

    const checkTimeout = () => {
        clearTimeout(typing.current);
        typing.current = setTimeout(() => {
            localStorage.setItem("todo-list", JSON.stringify(todayList));
        }, 1200);
    }

    const changeCategory = (cate_id, col, value) => {
        setTodayList(prev => {
            const clone = [...prev];
            const idx = clone.findIndex(item => item.cate_id === cate_id);
            if (idx === -1) return prev;
            clone[idx][col] = value;
            return clone;
        });
    }

    const changeValue = (category, id, col, value) => {
        setTodayList(prev => {
            const clone = [...prev];
            const idx = clone.findIndex(item => item.category === category);
            const { todos } = clone[idx];
            const todoIdx = todos.findIndex(item => item.id === id);
            todos[todoIdx][col] = value;
            return clone;
        });
    }

    const clearAllData = () => {
        if (!window.confirm("모든 데이터를 지우시겠습니까?")) return;
        setTodayList(emptyData.datas);
    }

    const setInitDatas = () => {
        if (!window.confirm("예시값을 적용하시겠습니까?\n입력 된 데이터가 있을 경우 사라집니다.")) return;
        setTodayList(initData.datas);
    }

    useEffect(() => { checkTimeout() }, [todayList]);

    return <MainLayout id="todo-list" cn="p-main">
        <header>
            <h2>To Do List</h2>
            <ul className="btns">
                <li><button onClick={clearAllData}>데이터 지우기</button></li>
                <li><button onClick={setInitDatas}>예시값 적용</button></li>
            </ul>
        </header>
        <section className="today">
            <article className="today-list">
                <ul className="scroll-design1">
                    {todayList.map(({ category, todos, cate_id, color }, idx) => (
                        <li key={`today_todo_${idx}`} className={color}>
                            <ul className="change-colors">{todo_colors.map((c, i) => <li key={`today_todo_${idx}_colors_${i}`} className={c} onClick={() => { changeCategory(cate_id, "color", c) }} />)}</ul>
                            <h4>
                                <input type="text" value={category} onChange={e => { changeCategory(cate_id, "category", e.target.value) }} />
                            </h4>
                            <ol>
                                {todos.map(({ thing, isDone, id }, todoIdx) => (
                                    <li key={`today_todo_${idx}_${todoIdx}`}>
                                        <input type="checkbox" checked={isDone} onChange={e => { changeValue(category, id, "isDone", e.target.checked) }} />
                                        <input type="text" value={thing} onChange={e => { changeValue(category, id, "thing", e.target.value) }} />
                                    </li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    </MainLayout>
}

export default TodoList;