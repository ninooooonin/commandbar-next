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
            title: `Boot CommandBar`, 
            description: `Make CommandBar available`,
            action: {
                type: Global.action.SWITCH,
                onClick: null,
                value: false
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
            title: `Context: Add Context via any array`, 
            description: `Adds any new (key, value) pairs to context. For any existing keys, updates values.`,  
            action: {
                type: Global.action.BUTTON,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Context: Add Context via key-value pair string`, 
            description: `Adds any new (key, value) pairs to context. For any existing keys, updates values.`,  
            action: {
                type: Global.action.BUTTON,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Context: Add Context via loader function (API call function)`, 
            description: `Adds any new (key, value) pairs to context. For any existing keys, updates values.`,  
            action: {
                type: Global.action.BUTTON,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Context: Remove Context`, 
            description: `Removes a key and its corresponding value from context.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Context: Replace Context`, 
            description: `Similar to addContext, but also removes any keys that are omitted from the supplied ctx from context`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Context: Get current context`, 
            description: `Returns the key value dictionary representing the current state of context`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Callback: Add callback`, 
            description: `Adds a callback function to CommandBar.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Callback: Remove callback`, 
            description: `Removes the callback function referenced by callbackKey from CommandBar.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Callback: Get current callbacks`, 
            description: `Returns dictionary representing the current callbacks currently stored within CommandBar.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Commands: Add command`, 
            description: `Add a command to CommandBar and returns a promise.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Commands: Remove command`, 
            description: `Remove a command, making it unavailable to a user.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Suppliers: Supply a router`, 
            description: `Sets a router function that link commands can use to update the page's URL without triggering a reload.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Suppliers: Supply an event handler`, 
            description: `Captures CommandBar events to be handled in your code/stored in your database.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Bar operations: Open the commandbar`, 
            description: `Open the Bar. If an input is supplied, will prefill the search input with that value.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Bar operations: Check if Bar is open`, 
            description: `Returns true if the Bar is currently open, and false otherwise.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Bar operations: Execute a command`, 
            description: `Executes a command. If this command has arguments, the Bar will open so the user can complete those arguments.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
        {  
            title: `Bar operations: Change Bar color`, 
            description: `Executes a command. If this command has arguments, the Bar will open so the user can complete those arguments.`,  
            action: {
                type: Global.action.SWITCH,
                onClick: () => set_data_shutdown_cmdbar(!data_shutdown_cmdbar),
                value: data_shutdown_cmdbar
            }
        },
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
            title: `Enable custom components`, 
            description: `Add a custom header and footer using the new SDK enterprise feature.`,
            instruction: `Requires to update org settings. Go to Org → Settings → Enabled custom component`,
            action: {
                type: Global.action.BUTTON,
                onClick: null,
                value: false
            }
        }
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