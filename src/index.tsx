import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto';
import './styles.css';

import App from './app';

const container = document.getElementById( 'root' ) as HTMLElement;
const root = ReactDOM.createRoot( container );

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
