import { memo } from "react";

const ListView = ({ idx, delDay, title, dday, lefts }) => {
    return <li className="list">
        <div className="infos">
            <h3>{title}</h3>
            <span className={new Date() > new Date(dday) ? "red" : "blue"}></span>
            <h4>{dday}</h4>
            <ol className="times">
                {Object.keys(lefts).map(k => <li key={`d_day_${idx}_${k}`}>
                    <h5>{lefts[k]}</h5>
                    <p>{k}</p>
                </li>)}
            </ol>
        </div>
        <button onClick={delDay}>X</button>
    </li>
}

export default memo(ListView);