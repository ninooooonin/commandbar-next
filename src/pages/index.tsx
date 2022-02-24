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

const Page = () => {

	// States
	const [isMounted, setMount] = useState(false);
	const [title, setTitle] = useState<string>('QueyBar: Built for CommandBar');

    // Local states
    const [cleanMode, setCleanMode] = useState(false);

    // Data States
	const [data_stress_test_cmd_k, set_data_stress_test_cmd_k] = useState(false);
	const [data_shutdown_cmdbar, set_data_shutdown_cmdbar] = useState(false);

    // Data
    const data = [
        {  
            title: `Stress Test ⌘ + K`, 
            description: `Execute window.CommandBar.open(), window.CommandBar.close() and 
                window.CommandBar.isOpen() with an interval of X seconds.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_stress_test_cmd_k(!data_stress_test_cmd_k),
                value: data_stress_test_cmd_k,
            }
        },
        {  
            title: `Shutdown CommandBar`, 
            description: `Execute window.CommandBar.shutdown()`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Enable custom components`, 
            description: `Add a custom header and footer using the new SDK enterprise feature.`,
            instruction: `Requires to update org settings. Go to Org → Settings → Enabled custom component`,
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
                instruction={item.instruction}
            />
        );
    }

    // Life Cycle Handler | Did Mount and Did Unmount
    useEffect(() => {
        componentDidMount();
        return componentWillUnmount;
    }, []);

    useEffect(() => {
        if(data_stress_test_cmd_k) {
            window.CommandBar.open();
        }
    }, [data_stress_test_cmd_k]);

	return (
        <Fragment>
            <AppHead title={title} />
            <AppHeader cleanMode={cleanMode} setCleanMode={() => setCleanMode(!cleanMode)}/>
            <AppContainer styles={`${app.container} ${cleanMode ? 'clean': ''}`}>
                <Wrapper>{ generateSections() }</Wrapper>
            </AppContainer>
        </Fragment>
	)
}

export default Page;