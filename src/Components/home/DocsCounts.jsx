import { docsList } from "js/array";
import { memo } from "react";

const DocsCounts = ({ ds }) => {
    return <>
        {ds.reduce((a, c) => a + c, 0)} 개
        <ol>
            {ds.reduce((acc, cur, idx) => <>{acc}<li><h5>{docsList[idx]}</h5><span>{cur}개</span></li></>, <></>)}
        </ol>
    </>
}


export default memo(DocsCounts);