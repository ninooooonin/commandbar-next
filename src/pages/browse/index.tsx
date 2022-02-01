import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';

// Templates
import AppContainer from '../../templates/container';
import AppHead from '../../templates/head';
import AppHeader from '../../templates/header';
import AppFooter from '../../templates/footer';

// Styled Components
import { H6 } from '../../components/general/text';
import { Wrapper as LayoutWrapper, Section as LayoutSection } from '../../components/general/layout';

// Styles
import app from  '../../scss/app.module.scss';
import styles from './styles.module.scss';

const Wrapper = styled(LayoutWrapper)`
    height: 100%;
    padding-top: 18px;
    padding-bottom: 25px;
`

const Browse = (props: any) => {
    
	// States
	const [isMounted, setMount] = useState(false);
	const [title, setTitle] = useState<string>('Browse Page');

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
            <AppHead title={title}/>
            <AppHeader />
            <AppContainer styles={app.container}>
                <Wrapper>
                    <H6>Browse page</H6>
                </Wrapper>
            </AppContainer>
            <AppFooter />
        </Fragment>
	)
}

export default Browse;