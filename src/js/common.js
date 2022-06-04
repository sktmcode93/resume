export const changeObjVal = (target, value, setFn) => {
    setFn(prev => {
        const clone = { ...prev };
        clone[target] = value;
        return clone;
    })
}