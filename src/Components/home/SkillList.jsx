import { memo } from "react";

const SkillList = ({ cn, lists, category }) => {
    return <article className={cn}>
        <h3>{category}</h3>
        <ul>
            {lists.map(({ title, image }, idx) => (
                <li key={`skills_${cn}_${idx}`}>
                    <div className="image-box"><img src={image} alt={title} /></div>
                    <h5>{title}</h5>
                </li>
            ))}
        </ul>
    </article>
}

export default memo(SkillList);