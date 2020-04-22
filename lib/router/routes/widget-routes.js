const widgetController = require('../../controllers/widget-controller');

module.exports = [
    {
        method: 'GET',
        path: '/widget',
        action: widgetController.index
    },
    {
        method: 'GET',
        path: '/widget?query',
        action: widgetController.show
    },
    {
        method: 'POST',
        path: '/widget',
        action: widgetController.store
    },
    {
        method: 'PUT',
        path: '/widget?query',
        action: widgetController.update
    },
    {
        method: 'DELETE',
        path: '/widget?query',
        action: widgetController.destroy
    }
]
