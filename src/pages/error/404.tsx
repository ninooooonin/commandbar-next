import React, { useEffect, useState, Fragment } from 'react';

// Templates
import AppContainer from '../../templates/container';
import AppHead from '../../templates/head';

// Styles
import app from  '../../scss/app.module.scss';
import styles from './styles.module.scss';

const Error404 = (props: any) => {

	// States
	const [isMounted, setMount] = useState(false);
	const [title, setTitle] = useState<string>('Error 404 Page');

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
            <AppContainer styles={app.container}>
                This is 404
            </AppContainer>
        </Fragment>
	)
}

export default Error404;