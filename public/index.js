import { fileURLToPath } from "url";

export const publicPath = fileURLToPath(new URL("../", import.meta.url));