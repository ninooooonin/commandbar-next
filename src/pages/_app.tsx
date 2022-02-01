import React from 'react';
import '../scss/global.scss';

import useCommandBar from '../hooks/useCommandBar';

const App = ({ Component, props }: any) => {

    // Initialized CommandBar
    useCommandBar();

  	return <Component {...props} />
}

export default App