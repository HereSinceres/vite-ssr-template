import react from '@vitejs/plugin-react';
import mdx from 'vite-plugin-mdx';
import ssr from 'vite-plugin-ssr/plugin';
import {UserConfig} from 'vite';

const config: UserConfig = {
    plugins: [react(), mdx(), ssr()],
    optimizeDeps: {include: ['@mdx-js/react']},
    clearScreen: false,
    resolve: {
        alias: {
            '#root': __dirname
        }
    }
};
export default config;
