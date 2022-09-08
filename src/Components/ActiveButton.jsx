import { memo } from "react";

const ActiveButton = ({ stand, condition, changeFn, children }) => (
    <button className={stand === condition ? "active" : ""} onClick={() => { changeFn(condition) }}>
        {children}
    </button>
)

export default memo(ActiveButton);