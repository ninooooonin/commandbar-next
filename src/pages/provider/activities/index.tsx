import React, { useEffect, useState, Fragment } from 'react';

// Templates
import AppContainer from '../../../templates/container';
import AppHead from '../../../templates/head';
import AppHeader from '../../../templates/header';
import AppFooter from '../../../templates/footer';

// Styles
import app from  '../../../scss/app.module.scss';
import styles from './styles.module.scss';

const Activities = (props: any) => {

	// States
	const [isMounted, setMount] = useState(false);
	const [title, setTitle] = useState<string>('Activities Page');

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
                This is Activities page
            </AppContainer>
            <AppFooter />
        </Fragment>
	)
}

export default Activities;