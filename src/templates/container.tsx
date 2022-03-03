import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
    &.clean {
        background-color: #FFFFFF;
        display: none;
    }
`

const AppContainer = (props: any) => {
    const { styles, children } = props;
    return (
      	<Container className={styles}>{children}</Container>
    )
}

export default AppContainer;