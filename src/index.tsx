import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

import AppWrap from './App';

const root = document.getElementById('root');
if (root) {
    createRoot(root).render(<AppWrap />);
}
