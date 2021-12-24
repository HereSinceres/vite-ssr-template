import React from 'react';
import {PageContextProvider} from './usePageContext';
import './PageShell.css';
import type {PageContext} from './types';


function PageShell({pageContext, children}: {pageContext: PageContext; children: React.ReactNode}) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>{children}</PageContextProvider>
        </React.StrictMode>
    );
}
export {PageShell};
