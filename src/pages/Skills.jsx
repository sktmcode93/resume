import { memo } from "react";

import HomeLayout from "layout/HomeLayout";
import SkillList from "Components/home/SkillList";

import { developeSkills, workSkills } from "js/array";

const Skills = () => {
    return <HomeLayout cn="skills p-main">
        <SkillList cn="develope" category="개발기술" lists={developeSkills} />
        <SkillList cn="work" category="소통기술" lists={workSkills} />
    </HomeLayout>
}

export default memo(Skills);