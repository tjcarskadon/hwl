import React from 'react';
import { render } from 'react-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
    render(
        <App />,
        rootElement
    );
}
