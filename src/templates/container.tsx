import React from 'react';

const AppContainer = (props: any) => {
    const { styles, children } = props;
    return (
      	<main className={styles}>{children}</main>
    )
}

export default AppContainer;