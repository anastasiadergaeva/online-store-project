import fs from "fs";
import { resolve, join } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://stackoverflow.com/questions/74337962/vite-is-not-serving-index-html-from-subdirectories
const redirectToDir = ({ root }) => ({
  name: "redirect-to-dir",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const filePath = join(root, req.url);

      fs.stat(filePath, (err, stats) => {
        if (!err && stats.isDirectory() && !req.url.endsWith("/")) {
          res.statusCode = 301;
          res.setHeader("Location", req.url + "/");
          res.setHeader("Content-Length", "0");
          res.end();
          return;
        }
        next();
      });
    });
  },
});

export default {
  base: "/online-store-project/",
  root: "./src",
  plugins: [redirectToDir({ root })],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        main: resolve(__dirname, "src/catalog/index.html"),
        item: resolve(__dirname, "src/item/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
      },
    },
  },
};
