import { memo, useEffect } from "react";

import LoadingGIF from 'images/Loading (1).gif';

const ModalPreviewList = ({ finding, previewList, setActiveInput }) => {

    const outFn = ({ path }) => {
        for (let { className } of path) {
            if (className && (className.includes("search-datas") || className === "left")) return;
        }
        setActiveInput(false);
        window.removeEventListener("click", outFn);
    }
    // Mount_Fn : 다른 곳 클릭시 사라지도록 이벤트 추가
    useEffect(() => { window.addEventListener("click", outFn) }, [])
    return <div className='search-datas'>
        {finding && <div><img src={LoadingGIF} alt='Loaing' /></div>}
        {!finding && previewList.length === 0 && <span>매칭되는 자료가 없습니다.</span>}
        {!finding && previewList.length !== 0 && <div className='stand'><ul className="preview-list scroll-design1">
            {previewList.reduce((acc, cur) => {
                const { small_cover_image, title, title_english, year, large_cover_image } = cur;
                return <>
                    {acc}
                    <li onClick={() => console.log(title || title_english)}>
                        <div className="thumbnail">
                            <img src={small_cover_image} alt={title || title_english} />
                        </div>
                        <aside>
                            <h4>{title || title_english}</h4>
                            <span>({year})</span>
                        </aside>
                        <div className="hover-img">
                            <img src={large_cover_image} alt={title || title_english} />
                        </div>
                    </li>
                </>
            }, <></>)}
        </ul></div>}
    </div>
}

export default memo(ModalPreviewList);