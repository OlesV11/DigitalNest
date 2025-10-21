import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
    server: { port: 5173, open: true },
    resolve: {
        alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "src/_variables.scss" as *;\n`
            }
        }
    }
})
