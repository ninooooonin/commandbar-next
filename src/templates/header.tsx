import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import { URL, H6 } from '../components/general/text';
import { Wrapper as LayoutWrapper, Row, Column } from '../components/general/layout';
import Switch from '../components/entry/switch';

// Icons
import { BrandIcon } from '../components/general/icons';

// Constants
import Global from '../constants/Global';

const propTypes = {
    cleanMode: PropTypes.bool,
    setCleanMode: PropTypes.func
};

const defaultProps = {
    cleanMode: false,
    setCleanMode: null
};

const Container = styled.header`
    height: 54px;
    background-color: #FFF;
    border-bottom: 2px solid #F6F7F8;
    box-sizing: border-box;
    position: sticky;
    top: 0px;
    z-index: 100;

    &.clean {
        border-bottom-color: transparent;

        .wrapper {
            justify-content: flex-start;
            max-width: unset;
            padding: 0px 18px;
        }
    }
`;

const Wrapper = styled(LayoutWrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);

    .brand-logo {
        margin-right: 36px;
    }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const Action = styled(Row)`
    align-items: center;
    
    button {
        margin-left: 12px;
    }
`;

const AppHeader = (props: any) => {
    const { url } = Global;
    const { cleanMode, setCleanMode } = props;

    return (
        <Container className={`${cleanMode ? 'clean': ''}`}>
            <Wrapper className={`wrapper`}>
                <Left>
                    <Link href={url.home} passHref>
                        <URL>
                            <BrandIcon styles={'brand-logo'}/>
                        </URL>
                    </Link>
                </Left>
                <Right>
                    <Action>
                        <H6>Clean Mode</H6>
                        <Switch onClick={setCleanMode} active={cleanMode}/>
                    </Action>               
                </Right>
            </Wrapper>
        </Container>
    )
}

AppHeader.propTypes = propTypes;
AppHeader.defaultProps = defaultProps;

export default AppHeader;