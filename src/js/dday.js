// dday에 따라 남은 시간을 구해주는 함수
export const findLeftTimes = (dday, now) => {
    const wholeTime = parseInt(((new Date(dday)) - now) / 1000);
    const leftSecs = wholeTime % 60;
    const leftMins = parseInt(wholeTime / 60) % 60;
    const leftHours = parseInt(wholeTime / 3600) % 24;
    const leftDays = parseInt(wholeTime / (3600 * 24));
    if (wholeTime < 0) return { "일 지남": Math.abs(leftDays) };
    else {
        const lefts = {
            d: leftDays,
            h: leftHours,
            m: leftMins,
            s: leftSecs
        }
        for (const k in lefts) {
            if (!lefts[k]) delete lefts[k];
        }
        return lefts;
    }
}
// 디데이 리스트를 초기화 하는 함수
export const clearDDay = setDayList => {
    if (!window.confirm("디데이 리스트를 초기화 시키시겠습니까?")) return;
    localStorage.setItem("dday", "");
    setDayList([]);
}

export const findDays = (isPast, lists) => {
    const day = new Date();
    return lists.reduce((acc, cur) => {
        if (isPast && new Date(cur.dday) < day) acc.push(cur);
        if (!isPast && new Date(cur.dday) >= day) acc.push(cur);
        return acc;
    }, []);
}