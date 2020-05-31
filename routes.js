// === IMPORTS ===
const nextRoutes = require("@yolkai/next-routes").default;
const routes = (module.exports = nextRoutes());

// === MAIN ===
routes.add("homepage", "/", "Homepage");
routes.add("results", "/result", "Results");
