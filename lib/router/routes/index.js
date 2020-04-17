const homeRoutes = require('./home-routes');
const widgetRoutes = require('./widget-routes');

module.exports = [...homeRoutes, ...widgetRoutes]
