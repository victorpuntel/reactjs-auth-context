import React, { ReactNode } from 'react';

import './styles.scss';

interface DashParams {
    children: ReactNode;
}

const Dash: React.FC<DashParams> = ({ children }) => {
    return (
        <div className="container">
            { children }
        </div>
    )
}

export default Dash;