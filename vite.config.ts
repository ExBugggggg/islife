/// <reference types="vitest"></reference>
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        })
    ],
    resolve: {
        alias: {
            '@': '/src',
            '@assets': '/src/assets',
            '@components': '/src/components',
            '@views': '/src/views'
        }
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        exclude: [...configDefaults.exclude],
        coverage: {
            provider: 'c8',
            reporter: ['text', 'json', 'html'],
        },
    }
})
