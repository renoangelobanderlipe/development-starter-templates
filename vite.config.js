import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@pages': path.resolve(__dirname, './resources/js/pages'),
            '@components': path.resolve(__dirname, './resources/js/components'),
            '@assets': path.resolve(__dirname, './resources/js/assets'),
            '@hooks': path.resolve(__dirname, './resources/js/hooks'),
            '@routes': path.resolve(__dirname, './resources/js/routes'),
            '@services': path.resolve(__dirname, './resources/js/services'),
            '@utils': path.resolve(__dirname, './resources/js/utils'),

        },
    },
});
