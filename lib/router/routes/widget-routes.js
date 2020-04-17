const widgetController = require('../../controllers/widget-controller');

module.exports = [
    {
        method: 'GET',
        path: '/widget',
        action: widgetController.index
    },
    {
        method: 'GET',
        path: '/widget/:id',
        action: widgetController.show
    },
    {
        method: 'POST',
        path: '/widget',
        action: widgetController.store
    },
    {
        method: 'PUT',
        path: '/widget/:id',
        action: widgetController.update
    },
    {
        method: 'DELETE',
        path: '/widget/:id',
        action: widgetController.destroy
    }
]
