// === IMPORTS ===
const nextRoutes = require("@yolkai/next-routes").default;
const routes = (module.exports = nextRoutes());

// === MAIN ===
routes.add("counter", "/", "Counter");
