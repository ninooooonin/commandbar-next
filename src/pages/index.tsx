import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';

// Templates
import AppContainer from '../templates/container';
import AppHead from '../templates/head';
import AppHeader from '../templates/header';
import AppFooter from '../templates/footer';

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
    margin-bottom: 18px;
    min-height: 250px;
    background-color: #fff;
    border-radius: 8px;

    &:last-child {
        margin-bottom: 0px;
    }
`

const Banner = styled.div`
    width: 100%;
    min-height: 200px;
    background-color: #FFFFFF;
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
                <Banner></Banner>
                <Wrapper>
                    <Section>
                    </Section>
                    <Section>
                    </Section>
                </Wrapper>
            </AppContainer>
            <AppFooter />
        </Fragment>
	)
}

export default Home;