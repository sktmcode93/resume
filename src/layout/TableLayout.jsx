import { memo } from "react";

const TableLayout = ({ children, cn, ths }) => {
    return (
        <div className="table-container">
            <table className={cn}>
                <thead>
                    <tr>
                        {ths.reduce((acc, th) => <>{acc}<th>{th}</th></>, <></>)}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default memo(TableLayout);