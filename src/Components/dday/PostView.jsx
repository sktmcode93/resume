import { memo } from "react";

const PostView = ({ idx, delDay, title, dday, lefts }) => {
    return <li className="post">
        <span className={new Date() > new Date(dday) ? "red" : "blue"}></span>
        <div className="btn-box"><button onClick={delDay}>X</button></div>
        <h3>{title}</h3>
        <h4>{dday}</h4>
        <ol className="times">
            {Object.keys(lefts).map(k => <li key={`d_day_${idx}_${k}`}>
                <h5>{lefts[k]}</h5>
                <p>{k}</p>
            </li>)}
        </ol>
    </li>
}

export default memo(PostView);