import React, { useEffect, useState, Fragment } from 'react';

// Templates
import AppContainer from '../../../templates/container';
import AppHead from '../../../templates/head';
import AppHeader from '../../../templates/header';
import AppFooter from '../../../templates/footer';

// Styles
import app from  '../../../scss/app.module.scss';
import styles from './styles.module.scss';

const ForgotPassword = (props: any) => {

	// States
	const [isMounted, setMount] = useState(false);
	const [title, setTitle] = useState<string>('Forgot Password Page');

	// Component will mount
    const componentWillUnmount = () => {
        setMount(false);
        console.log('Component Did UnMount Sign In');
    }

    const componentDidMount = () => {
        setMount(true);
        console.log('Component Did Mount Sign In');
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
                <a href="/">Sample</a>
            </AppContainer>
            <AppFooter />
        </Fragment>
	)
}

export default ForgotPassword;