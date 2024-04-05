import React, {FC, ReactElement, ReactNode} from 'react';

interface ITitle {
    level: 1 | 2 | 3,
    className: string,
    children: ReactNode
}
const Title: FC<ITitle> = ({ level, className, children }): ReactElement => {
    if (level === 1) {
        return (
            <h1 className={className}>{children}</h1>
        )
    }
    if (level === 2) {
        return (
            <h2 className={className}>{children}</h2>
        )
    }
    return (
        <h3 className={className}>{children}</h3>
    )
};

export default Title;