import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './screens/App';

require('tailwindcss/tailwind.css');

const $app = document.getElementById('app');

ReactDOM.render(<App />, $app);
