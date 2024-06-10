import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
    css: {
        devSourcemap: true
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './resources/js'),
            react: path.resolve('./node_modules/react'),
        }
    }
});
