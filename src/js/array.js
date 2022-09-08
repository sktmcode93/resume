import skill_html from 'images/skill_html.png';
import skill_css from 'images/skill_css.png';
import skill_js from 'images/skill_js.png';
import skill_jquery from 'images/skill_jquery.png';
import skill_sass from 'images/skill_sass.png';
import skill_react from 'images/skill_react.png';
import skill_communicate from 'images/skill_communicate.png';
import skill_active from 'images/skill_active.png';
import skill_fast from 'images/skill_fast.png';
import skill_openmind from 'images/skill_openmind.png';
import skill_help from 'images/skill_help.png';

export const docsList = ["html", "jsx", "js", "css", "scss"];

export const errorList = {
    todo_fill_category: "카테고리를 채워주세요.",
    todo_reserved_category: "해당 이름으로는 생성할 수 없습니다.",
    todo_duple: "이미 존재하는 값입니다.",
    todo_delete_standard: "기본 항목은 제거 할 수 없습니다."
}

export const moive_sort_list = [
    { value: "year", title: "최신순" },
    { value: "rating", title: "평점순" },
    { value: "download_count", title: "다운로드순" }
]

export const developeSkills = [
    { title: "", image: skill_html, content: "" },
    { title: "", image: skill_css, content: "" },
    { title: "", image: skill_js, content: "" },
    { title: "", image: skill_jquery, content: "" },
    { title: "", image: skill_sass, content: "" },
    { title: "", image: skill_react, content: "" },
]
export const workSkills = [
    { title: "[의사소통]", image: skill_communicate, content: "하고 싶은 말을 하는 것만이 아닌 경청함으로 어떤 대화를 원하는 지 파악하고 생각을 정리하여 표현 가능" },
    { title: "[적극적인 의견]", image: skill_active, content: "회의나 피드백을 할 때 기획과 아이템 방향, 상황을 고려하여 생각한 바를 적극적으로 소통" },
    { title: "[집중력]", image: skill_fast, content: "원하는 방향으로 갔는지와 상관 없이 개발 할 사항이 정해졌을 때 기한 내에 빠르게 개발" },
    { title: "[열린생각]", image: skill_openmind, content: "개발 도중 다른 동료가 알아야 될 정보가 생길 시 전달하여 에너지 및 시간 낭비 방지" },
    { title: "[협력]", image: skill_help, content: "서로의 일의 경계가 존재하지만 그렇다 하여 도움이 필요한 동료를 외면하지 않음" },
]