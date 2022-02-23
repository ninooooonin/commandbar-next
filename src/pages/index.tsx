import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';

// Templates
import AppContainer from '../templates/container';
import AppHead from '../templates/head';
import AppHeader from '../templates/header';

// Styled Components
import { H6 } from '../components/general/text';
import { Wrapper as LayoutWrapper, Section as LayoutSection } from '../components/general/layout';

// Styles
import app from  '../scss/app.module.scss';

const Wrapper = styled(LayoutWrapper)`
    height: 100%;
    padding-top: 18px;
    padding-bottom: 25px;
`

const Section = styled(LayoutSection)`
    margin-bottom: 20px;
    min-height: 125px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 3px 5px #eeeeee;    

    &:last-child {
        margin-bottom: 0px;
    }
`

const Home = () => {

	// States
	const [isMounted, setMount] = useState(false);
	const [title, setTitle] = useState<string>('Home Page');

	// Component will mount
    const componentWillUnmount = () => {
        setMount(false);
    }

    const componentDidMount = () => {
        setMount(true);
    }

    // Life Cycle Handler | Did Mount and Did Unmount
    useEffect(() => {
        componentDidMount();
        return componentWillUnmount;
    }, [])

	return (
        <Fragment>
            <AppHead title={title} />
            <AppHeader />
            <AppContainer styles={app.container}>
                <Wrapper>
                    <Section>
                    </Section>
                    <Section>
                    </Section>
                </Wrapper>
            </AppContainer>
        </Fragment>
	)
}

export default Home;