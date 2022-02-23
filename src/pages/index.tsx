import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';

// Templates
import AppContainer from '../templates/container';
import AppHead from '../templates/head';
import AppHeader from '../templates/header';
import Section from '../templates/section';

// Styled Components
import { Wrapper as LayoutWrapper } from '../components/general/layout';

// Styles
import app from  '../scss/app.module.scss';

// Constant
import Global from '../constants/Global';

const Wrapper = styled(LayoutWrapper)`
    height: 100%;
    padding-top: 18px;
    padding-bottom: 25px;
`

const Home = () => {

	// States
	const [isMounted, setMount] = useState(false);
	const [title, setTitle] = useState<string>('QueyBar: Built for automation');

    // Constants
    const action = {
        SWITCH: 'switch',
        BUTTON: 'button'
    };

    const data = [
        {  
            title: `Stress Test ⌘ + K`, 
            description: `Execute window.CommandBar.open(), window.CommandBar.close() and 
                window.CommandBar.isOpen() with an interval of X seconds.`,  
            action: {
                type: Global.action.SWITCH,
                onChange: null,
                value: false,
            }
        },
        {  
            title: `Shutdown CommandBar`, 
            description: `Execute window.CommandBar.shutdown()`,  
            action: {
                type: Global.action.BUTTON,
                onClick: null,
                value: false
            }
        },
        {  
            title: `Enable custom components`, 
            description: `Add a custom header and footer using the new SDK enterprise feature. 
                Requires to update org settings. Go to Org > Settings > Enabled custom component)`,
            action: {
                type: Global.action.BUTTON,
                onClick: null,
                value: false
            }
        },
        {  
            title: `Stress Test ⌘ + K`, 
            description: `Execute window.CommandBar.open(), window.CommandBar.close() and 
                window.CommandBar.isOpen() with an interval of X seconds.`,  
            action: {
                type: Global.action.SWITCH,
                onChange: null,
                value: false,
            }
        },
        {  
            title: `Shutdown CommandBar`, 
            description: `Execute window.CommandBar.shutdown()`,  
            action: {
                type: Global.action.BUTTON,
                onClick: null,
                value: false
            }
        },
        {  
            title: `Enable custom components`, 
            description: `Add a custom header and footer using the new SDK enterprise feature. 
                Requires to update org settings. Go to Org > Settings > Enabled custom component)`,
            action: {
                type: Global.action.BUTTON,
                onClick: null,
                value: false
            }
        },
        {  
            title: `Stress Test ⌘ + K`, 
            description: `Execute window.CommandBar.open(), window.CommandBar.close() and 
                window.CommandBar.isOpen() with an interval of X seconds.`,  
            action: {
                type: Global.action.SWITCH,
                onChange: null,
                value: false,
            }
        },
        {  
            title: `Shutdown CommandBar`, 
            description: `Execute window.CommandBar.shutdown()`,  
            action: {
                type: Global.action.BUTTON,
                onClick: null,
                value: false
            }
        },
        {  
            title: `Enable custom components`, 
            description: `Add a custom header and footer using the new SDK enterprise feature. 
                Requires to update org settings. Go to Org > Settings > Enabled custom component)`,
            action: {
                type: Global.action.BUTTON,
                onClick: null,
                value: false
            }
        },
    ];

	// Component will mount
    const componentWillUnmount = () => {
        setMount(false);
    }

    const componentDidMount = () => {
        setMount(true);
    }

    const generateSections = () => {
        return data.map((item: any, index: any) =>
            <Section 
                key={`quey-section-${index}`}
                title={item.title} 
                description={item.description} 
                action={item.action}
            />
        );
    }

    // Life Cycle Handler | Did Mount and Did Unmount
    useEffect(() => {
        componentDidMount();
        return componentWillUnmount;
    }, []);

	return (
        <Fragment>
            <AppHead title={title} />
            <AppHeader />
            <AppContainer styles={app.container}>
                <Wrapper>{ generateSections() }</Wrapper>
            </AppContainer>
        </Fragment>
	)
}

export default Home;