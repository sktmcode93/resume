import { memo } from "react";

import HomeLayout from "layout/HomeLayout";
import SkillList from "Components/home/SkillList";

import { developeSkills } from "js/array";

const Skills = () => {
    return <HomeLayout cn="skills p-main">
        <SkillList cn="develope" category="개발기술" lists={developeSkills} />

    </HomeLayout>
}

export default memo(Skills);