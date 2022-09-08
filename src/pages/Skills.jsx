import { memo, useEffect } from "react";

import HomeLayout from "layout/HomeLayout";
import SkillList from "Components/home/SkillList";

import { developeSkills, workSkills } from "js/array";

const Skills = () => {
    useEffect(() => { document.title = "기술 | 김성엽"; }, [])
    return <HomeLayout cn="skills h-main">
        <SkillList cn="develope" category={<><b>개발</b>기술</>} lists={developeSkills} />
        <SkillList cn="work" category={<><b>소통</b>기술</>} lists={workSkills} />
    </HomeLayout>
}

export default memo(Skills);