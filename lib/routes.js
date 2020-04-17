const widgetController = require('./widget-controller');

module.exports = [
    {
        method: 'GET',
        path: '/',
        action: (req, res) => {
            return res.end('This is site\'s root!');
        }
    },
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
