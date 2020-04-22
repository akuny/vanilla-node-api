const widgetController = require('../../controllers/widget-controller');

module.exports = [
    {
        method: 'GET',
        path: '/widget',
        action: widgetController.index
    },
    {
        method: 'GET',
        path: '/widget?name',
        action: widgetController.show
    },
    {
        method: 'POST',
        path: '/widget',
        action: widgetController.store
    },
    {
        method: 'PUT',
        path: '/widget?name',
        action: widgetController.update
    },
    {
        method: 'DELETE',
        path: '/widget?name',
        action: widgetController.destroy
    }
]
