import { memo, useEffect } from "react";

import HomeLayout from "layout/HomeLayout";
import PortList from "Components/home/PortList";

import thumb_dday from 'images/thumbnail_dday.jpg';
import thumb_todolist from 'images/thumbnail_todolist.jpg';

const Portfolio = () => {


    useEffect(() => { document.title = "포트폴리오 | 김성엽" }, [])
    return <HomeLayout cn="portfolio h-main">
        <ul className="pf-list">
            <PortList image={thumb_dday} title="D-Day Counter" targetPage="d-day-counter">
                <p>- localStorage를 통해 데이터를 보존</p>
                <p>- 포스트뷰/리스트뷰 기능</p>
                <p>- 필터(전체D-day / 지난 D-day / 남은 D-day) 기능</p>
                <p>- 새로운 D-Day 추가 및 데이터 초기화(localStorage를 초기화)</p>
                <p>- 개별 삭제 기능</p>
            </PortList>
            <PortList image={thumb_todolist} title="Todo List" targetPage="todo-list">
                <p>- localStorage를 통해 데이터를 보존</p>
                <p>- 카테고리 및 Todo 입력 및 완료사항 체크</p>
                <p>- 각 카테고리 색깔 변경</p>
                <p>- 데이터 초기화 및 예시값 적용 기능</p>
            </PortList>
            <PortList image={thumb_dday} title="Movie Bank" targetPage="movie-bank">
                <p>- localStorage를 통해 데이터를 보존</p>
                <p>- 포스트뷰/리스트뷰 기능</p>
                <p>- 필터(전체D-day / 지난 D-day / 남은 D-day) 기능</p>
                <p>- 새로운 D-Day 추가 및 데이터 초기화(localStorage를 초기화)</p>
                <p>- 개별 삭제 기능</p>
            </PortList>
        </ul>
    </HomeLayout>
}

export default memo(Portfolio);