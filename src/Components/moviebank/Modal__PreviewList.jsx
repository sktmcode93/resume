import { memo, useEffect } from "react";

import LoadingGIF from 'images/Loading (1).gif';

const ModalPreviewList = ({ finding, previewList, setActiveInput }) => {

    const outFn = e => {
        const checkList = ["search-preview", "search-input"];
        for (let p of e.path) {
            if (checkList.includes(p.className)) return;
        }
        setActiveInput(false);
        window.removeEventListener("click", outFn);
    }
    // Mount_Fn : 다른 곳 클릭시 사라지도록 이벤트 추가
    useEffect(() => { window.addEventListener("click", outFn) }, [])
    return <div className='search-preview'>
        {/* 리서치 중에는 로딩창 렌더링 */}
        {finding && <div><img src={LoadingGIF} alt='Loaing' /></div>}

        {/* 리서치 이후 자료가  없을 경우 매칭 자료가 없다고 렌더링 */}
        {!finding && !previewList.length && <span>매칭되는 자료가 없습니다.</span>}

        {/* 리서치 이후 자료가  있을 경우 리스트 렌더링 */}
        {!finding && previewList.length && <div className='stand'><ul className="preview-list scroll-design1">
            {previewList.map((cur, idx) => {
                const { small_cover_image, title, title_english, year, large_cover_image } = cur;
                return <li key={`preview_${idx}`}>
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
            })}
        </ul></div>}
    </div>
}

export default memo(ModalPreviewList);