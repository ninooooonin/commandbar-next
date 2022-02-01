import React, { Fragment } from 'react';

const AppLayout = (props: any) => {
    const { children } = props;
    return (
        <Fragment>
            { children }
        </Fragment>
    )
}

export default AppLayout;