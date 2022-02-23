import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Components
import { URL } from '../components/general/text';
import { Wrapper as LayoutWrapper, Row, Column } from '../components/general/layout';
import Switch from '../components/entry/switch';

// Icons
import { BrandIcon } from '../components/general/icons';

// Constants
import Global from '../constants/Global';

const Container = styled.header`
    height: 65px;
    background-color: #FFF;
    border-bottom: 2px solid #F6F7F8;
    box-sizing: border-box;
`;

const Wrapper = styled(LayoutWrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;

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

const Navigation = styled.nav`
    display: flex;
    align-items: center;

    .nav-item {
        color: #000000;
        font-size: 16px;
        font-family: var(--font-medium);
        margin-right: 32px;
        white-space: nowrap;

        &.highlight { 
            color: #1FC749;
        }

        &.solid {
            height: 36px;
            background-color: #000000;
            border-radius: 8px;
            padding: 0px 12px;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &:last-child {
            margin-right: 0px;
        }
    }
`;

const AppHeader = (props: any) => {
    const { url } = Global;


    // Local states
    const [cleanMode, setCleanMode] = useState(false);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link href={url.home} passHref>
                        <URL>
                            <BrandIcon styles={'brand-logo'}/>
                        </URL>
                    </Link>
                </Left>
                <Right>
                    <Switch onClick={() => setCleanMode(!cleanMode)} active={cleanMode}/>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default AppHeader;