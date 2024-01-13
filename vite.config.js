import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'
export default {
    plugins: [Inspect()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                catalog: resolve(__dirname, './catalog/index.html'),
                cart: resolve(__dirname, './cart/index.html'),
                card: resolve(__dirname, './card/index.html')
            }
        }
    }
}