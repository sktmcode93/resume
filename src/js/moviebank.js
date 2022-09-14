export const checkCache = (cache, pageInfo) => {
    if (!cache.length) return null;
    const { page, sorted_by, viewCount } = pageInfo;
    let index = -1;
    const finding = cache.find(({ condition }, idx) => {
        if (page === condition.page && sorted_by === condition.sorted_by && viewCount === condition.viewCount) {
            index = idx;
            return true;
        }
        else return false;
    });
    if (finding) return { listData: finding.listData, index };
    else return null;
}