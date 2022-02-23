import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Components
import { URL, H6 } from '../components/general/text';
import { Wrapper as LayoutWrapper, Row, Column } from '../components/general/layout';
import Switch from '../components/entry/switch';

// Icons
import { BrandIcon } from '../components/general/icons';

// Constants
import Global from '../constants/Global';

const Container = styled.header`
    height: 54px;
    background-color: #FFF;
    border-bottom: 2px solid #F6F7F8;
    box-sizing: border-box;
    position: sticky;
    top: 0px;
    z-index: 100;
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

const Action = styled(Row)`
    align-items: center;
    
    button {
        margin-left: 12px;
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
                    <Action>
                        <H6>Clean Mode</H6>
                        <Switch onClick={() => setCleanMode(!cleanMode)} active={cleanMode}/>
                    </Action>               
                </Right>
            </Wrapper>
        </Container>
    )
}

export default AppHeader;